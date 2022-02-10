import {MongoClient} from 'mongodb';

async function handler(request, res) {

  const eventId = request.query.eventId;

  console.log('eventid', eventId);

  switch (request.method) {
    case "POST":

      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const meetupListCollection = db.collection(process.env.MONGODB_MEETUPS);

      const {email, name, text} = request.body;

      if (!email.includes("@") || !name
        || name.trim() === '' || !text
        || text.trim() === '') {
        res.status(422).json({
          error: {
            message: 'empty values'
          }
        });
      }

      const resultSearch = await meetupListCollection
        .findOne({ eventId: eventId });

      const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
      }

      const result = await newsletterCollection.insertOne(newComment);

      return res.status(201).json({message: 'success', comment: newComment});
    case "GET":

      console.log('entering???')

      const dummy = [
        {
          id: 'a1',
          name: 'Marco',
          email: 'test@example.com',
          comment: 'lorem ipsum dolor sit am lorem'
        }, {
          id: 'a2',
          name: 'Karen',
          email: 'karen@example.com',
          comment: 'lorem ipsum dolor sit am lorem'
        },
      ]

      return res.status(201).json({comments: dummy})

  }
}

export default handler;