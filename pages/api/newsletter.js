export default function handler(req, res) {

  console.log('entering');

  const newUserEmail = req.body.email;
  const url = '';

  if (req.method !== 'POST') {
    if (!newUserEmail || newUserEmail.indexOf('@') !== -1) {
      res.status(405).json({message: 'Email is not a valid email'});
      return;
    }

    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(newUserEmail),
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.status(200).json({message: 'Success', response: res}))

    console.log('status', newUserEmail);
    res.status(201).json({message: 'Success'});
  }
}
