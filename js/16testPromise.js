
function getToken() {
  return new Promise((resolve, reject) => {
    // cas favorable
    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve("Toioisfdppojpo6656456sqdffdsq:");
      }, 1000)
    } else { // cas défavorable
      setTimeout(() => {
        reject(new Error("Oups ... pb de token"));
      }, 1000)
    }
  })
}
function getUser(token) {
  return new Promise((resolve, reject) => {
    // cas favorable
    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve({ name: "toto", uid: 123 });
      }, 1000)
    } else { // cas défavorable
      setTimeout(() => {
        reject(new Error("Oups ... pb d'authentification de l'utilisateur"));
      }, 1000)
    }
  })
}
/* getToken()
  .then(token => {
    console.log(`token`, token);
    return getUser(token);
  })
  .then(user => {
    console.log(`user : `, user);
  })
  .catch(error => {
    console.error(error);
  }); */

// async await
async function apiGet() {
  try {
    const token = await getToken();
    const user = await getUser(token);
    console.log(`token`, token);
    console.log(`user`, user);

  } catch (error) {
    console.error(error);
  }
}
apiGet();
