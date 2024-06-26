import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;

  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      body = data[0].body;
      firstName = data[1].firstName;
      lastName = data[1].lastName;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
