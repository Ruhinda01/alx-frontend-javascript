function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
        resolve('response from api');
        reject('error from api');
    });
}