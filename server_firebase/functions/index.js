const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');


const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aglomer-9c6d9.firebaseio.com"
})



//consumibles places
const places_app = express();
// Automatically allow cross-origin requests
places_app.use(cors({ origin: true }));

places_app.get('/', async (req, res) => {

  const snapshot = await admin.firestore().collection("places").get();

  let places1 = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();

    places1.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(places1));
});

places_app.get('/:id', async (req, res) => {
  const obj_places = await admin.firestore().collection('places').doc(req.params.id).get();

  const placeId = obj_places.id;
  const placeData = obj_places.data();
  res.status(200).send(JSON.stringify({ id: placeId, ...placeData }));
});

places_app.post('/', async (req, res) => {

  const place = req.body;
  console.log(place.name);
  await admin.firestore().collection('places').doc(place.name).set(place);
  res.status(201).send();
});


places_app.post('/:id', async (req, res) => {

  const body = req.body;
  await admin.firestore().collection('places').doc(req.params.id).update({
    comments: admin.firestore.FieldValue.arrayUnion(body)
  });
  res.status(202).send();
});

places_app.post('/:id/:1', async (req, res) => {
  const body = req.body;
  await admin.firestore().collection('places').doc(req.params.id).update({
    'go.type_user': admin.firestore.FieldValue.arrayUnion(body)
  });
  res.status(203).send();
});

places_app.post('/:id/:2', async (req, res) => {

  const body = req.body;
  await admin.firestore().collection('places').doc(req.params.id).update({
    'maybe.type_user': admin.friestore.FieldValue.arrayUnion(body)
  });
  res.status(204).send();
});

places_app.put('/:id', async (req, res) => {

  const body = req.body;
  await admin.firestore().collection('places').doc(req.params.id).update(body);
  res.status(200).send();

});

exports.place = functions.https.onRequest(places_app);
//fin consumibles places

//consumibles users
const users_app = express();
// Automatically allow cross-origin requests
users_app.use(cors({ origin: true }));

users_app.get('/', async (req, res) => {

  const snapshot = await admin.firestore().collection("users").get();

  let users1 = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();

    users1.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(users1));
});

users_app.get('/:id', async (req, res) => {
  const obj_user = await admin.firestore().collection('users').doc(req.params.id).get();

  const userName = obj_user.id;
  const userData = obj_user.data();
  res.status(200).send(JSON.stringify({ id: userName, ...userData }));
});



users_app.post('/', async (req, res) => {

  const user = req.body;
  console.log(user.name);
  await admin.firestore().collection('users').doc(user.name).set(user);
  res.status(201).send();
});

users_app.post('/:id/:1', async (req, res) => {

  const anex = req.body;
  await admin.firestore().collection('users').doc(req.params.id).update({
    agendaAsistir: admin.firestore.FieldValue.arrayUnion(anex)
  });
  res.status(203).send();
});

users_app.post('/:id/:2', async (req, res) => {

  const anex = req.body;
  await admin.firestore().collection('users').doc(req.params.id).update({
    agendaTalvez: admin.firestore.FieldValue.arrayUnion(anex)
  });
  res.status(204).send();
});

exports.user = functions.https.onRequest(users_app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
