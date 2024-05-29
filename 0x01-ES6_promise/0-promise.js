export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('response from api');
    reject(new Error('error from api'));
  });
}
