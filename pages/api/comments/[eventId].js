export default function handler(request, res) {

  const eventId = request.query.eventId;

  console.log( 'entering to api', eventId);
  console.log('body request method', request.method);

  switch (request.method) {
    case "POST":

      const {email, name, text} = request.body;

      console.log('body from comment eventid api', request.body);

      if (!email.includes("@") || !name
        || name.trim() === '' || !text
        || text.trim() === '') {
        res.status(422).json({
          error: {
            message: 'empty values'
          }
        });
      }

      // console.log(email, name, text);

      const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
      }

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
