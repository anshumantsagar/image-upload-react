import config  from '../config';
import { makePostRequest, makeGetRequest, makePutRequest, uploadFileMultiPart } from './http-service';
const BASE_URL = config.BASE_URL; // create a config.js to maintain the BASE_URL

export const signUp = signupData => {
  console.log('BASE_URL :', BASE_URL);
  return new Promise((resolve, reject) => {
    makePostRequest(
      BASE_URL + "/signup/patient",
      false,
      signupData
    )
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.log("API call error: ", e);
        reject(e);
      });
  });
};
