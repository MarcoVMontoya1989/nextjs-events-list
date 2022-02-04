export default function handler(request, response) {

  const eventId = request.query.eventId;


  switch (request.method) {
    case "POST":

      const {email, name, text} = request.body;

      if (!email.includes("@") || !name || name.trim() === '' || !text || text.trim() === '') {
        res.status(422).json({
          error: {
            message: 'empty values'
          }
        });
      }

      console.log(email, name, text);

      const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
      }

      return res.status(201).json({message: 'success', comment: newComment});
    case "GET":

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

      return res.status(200).json({comments: dummy})

  }
}
