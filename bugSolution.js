//Proper initialization and asynchronous handling using promises:

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

databaseRef.once('value').then((snapshot) => {
  // Access data here. The connection is guaranteed to be established.
  console.log(snapshot.val());
}).catch((error) => {
  console.error(error);
});

//Proper initialization and asynchronous handling using async/await:

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

async function getData(){
  try{
    const snapshot = await databaseRef.once('value');
    console.log(snapshot.val());
  } catch (error) {
    console.error(error);
  }
}

getData();