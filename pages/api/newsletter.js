import {MongoClient} from 'mongodb';

const newUserNewsletter = async (req, res) => {
  const newUserEmail = req.body.email;
  let result;

  console.log(newUserEmail);

  if (req.method === 'POST') {
    if (!newUserEmail || newUserEmail.indexOf('@') === -1) {
      res.status(405).json({message: 'Email is not a valid email'});
      return;
    }

    const data = req.body;

    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const newsletterCollection = db.collection(process.env.MONGODB_NEWSLETTER);

      result = await newsletterCollection.insertOne(data);

      res.status(201).json({
        message: 'added to collection',
        bodyContent: result
      });

      client.close();
    } catch (err) {
      res.status(405).json({message: 'Something went wrong while inserting'});
    }
  }
}

export default newUserNewsletter;
