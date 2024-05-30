import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise.allSettled([signUp, upload])
    .then((results) => {
      const arrData = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          arrData.push({ status: result.status, value: result.value });
        } else {
          arrData.push({ status: result.status, value: `Error: ${result.reason.message}` });
        }
      });
      return arrData;
    });
}
