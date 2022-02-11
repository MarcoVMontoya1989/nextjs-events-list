import {MongoClient} from 'mongodb';

async function handler(request, res) {

  const eventId = request.query.eventId;

  switch (request.method) {
    case "POST":
      try {
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const meetupListCollection = db.collection('meetupComments');

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
          date: new Date().toISOString(),
          email,
          name,
          text
        };

        if (!resultSearch) {
          const newCommentWithNewId = {
            eventId: eventId,
            comments: [newComment]
          };

          const resultNew = await meetupListCollection.insertOne(newCommentWithNewId);

          return res.status(201).json({message: 'success', result: resultNew});

        } else {
          const toInsert = {
            comments: newComment
          };
          const options = { upsert: true, returnDocument: 'after' };

          const resultNewComment = await meetupListCollection.findOneAndUpdate(
            { 'eventId': eventId },
            { $push: toInsert },
            options
          );

          return res.status(201).json({message: 'success', result: resultNewComment});
        }
      } catch (e) {
        return res.status(501).json({'message error': e.message});
      }
      break;
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