import {MongoClient} from 'mongodb';

async function handler(request, res) {

  const eventId = request.query.eventId;

  if(request.method === "GET") {
    console.log('entering to the GET');

    try {
      const commentsList = [];

      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const meetupListCollection = db.collection('meetupComments');

      const resultSearch = await meetupListCollection
        .findOne({ eventId: eventId });

      if (!resultSearch) {
        return res.status(201).json({empty: true});
      }

      return res.status(201).json({comments: [...resultSearch.comments]});

    } catch (e) {
      return res.status(501).json({'message error': e.message});
    }
  }
}

export default handler();