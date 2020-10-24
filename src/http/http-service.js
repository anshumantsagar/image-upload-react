// import { getToken } from "./token-interceptor"; // use this if API needs to send a AUTH token in header

const structureQueryParams = params => {
  let queryStrings = "?";
  const keys = Object.keys(params);
  keys.forEach((key, index) => {
    queryStrings += key + "=" + params[key];
    if (params[keys[index + 1]]) {
      queryStrings += "&";
    }
  });
  return queryStrings;
};
export const makeGetRequest = async (
  url,
  attachToken = false,
  params = null
) => {
  let queryString = "";
  if (params) {
    queryString = structureQueryParams(params);
  }
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsIl9pZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsImZ1bGxOYW1lIjoiQW5zaHVtYW50IFNhZ2FyIiwiZW1haWwiOiJhbnNodW1hbnRAbG9naWMtc3F1YXJlLmNvbSIsImlhdCI6MTYwMzI5MjU1NCwiZXhwIjoxNjA1ODg0NTU0fQ.dr--UVQIZtHsac7dFf65RvGYqWypXSktAKApJEyDN8Q"
      if (authToken) {
        console.log(authToken);
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return new Promise((resolve, reject) => {
    try {
      fetch(url + queryString, {
        method: "GET",
        headers: headers
      })
        .then(res => res.json())
        .then(jsonResponse => {
          if (jsonResponse.error === false) { // change this condition according to response structure
            resolve(jsonResponse);
          } else {
            console.log(jsonResponse);
            reject(jsonResponse);
          }
        })
        .catch(e => {
          console.log("XHR GET Error: ", e);
          reject(e);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
export const makePostRequest = async (
  url,
  attachToken = false,
  params = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsIl9pZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsImZ1bGxOYW1lIjoiQW5zaHVtYW50IFNhZ2FyIiwiZW1haWwiOiJhbnNodW1hbnRAbG9naWMtc3F1YXJlLmNvbSIsImlhdCI6MTYwMzI5MjU1NCwiZXhwIjoxNjA1ODg0NTU0fQ.dr--UVQIZtHsac7dFf65RvGYqWypXSktAKApJEyDN8Q"
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(params)
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            if (jsonResponse.error === false) {
              resolve(jsonResponse);
            } else {
              console.log(jsonResponse);
              reject(jsonResponse);
            }
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
// export const makePutRequest = async (
//   url,
//   attachToken = false,
//   params = {}
// ) => {
//   let headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   };
//   if (attachToken) {
//     try {
//       const authToken = await getToken();
//       if (authToken) {
//         headers["Authorization"] = "Bearer " + authToken;
//       }
//     } catch (e) {
//       console.log("Error fetching auth token: ", e);
//     }
//   }
//   return new Promise((resolve, reject) => {
//     try {
//       fetch(url, {
//         method: "PUT",
//         headers: headers,
//         body: JSON.stringify(params)
//       })
//         .then(
//           res => res.json(),
//           error => {
//             reject(error);
//           }
//         )
//         .then(
//           jsonResponse => {
//             if (jsonResponse.error === false) {
//               resolve(jsonResponse);
//             } else {
//               console.log(jsonResponse);
//               reject(jsonResponse);
//             }
//           },
//           error => {
//             reject(error);
//           }
//         )
//         .catch(error => {
//           reject(error);
//         });
//     } catch (e) {
//       console.log(e);
//       reject();
//     }
//   });
// };
export const makeDeleteRequest = async (
  url,
  attachToken = false,
  params = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  if (attachToken) {
    try {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsIl9pZCI6IjVmOTA0NWYzNGJjZWJiNTFmM2Q3MDZkOCIsImZ1bGxOYW1lIjoiQW5zaHVtYW50IFNhZ2FyIiwiZW1haWwiOiJhbnNodW1hbnRAbG9naWMtc3F1YXJlLmNvbSIsImlhdCI6MTYwMzI5MjU1NCwiZXhwIjoxNjA1ODg0NTU0fQ.dr--UVQIZtHsac7dFf65RvGYqWypXSktAKApJEyDN8Q"
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(params)
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            if (jsonResponse.error === false) {
              resolve(jsonResponse);
            } else {
              console.log(jsonResponse);
              reject(jsonResponse);
            }
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
export const uploadFileMultiPart = async (
  url,
  attachToken = false,
  formData,
  mediaType = 'image'
) => {
  let headers = {
    
  };
  if (attachToken) {
    try {
      const authToken = false//await getToken();
      if (authToken) {
        headers["Authorization"] = "Bearer " + authToken;
      }
    } catch (e) {
      console.log("Error fetching auth token: ", e);
    }
  }
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: formData
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            resolve(jsonResponse);
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};

