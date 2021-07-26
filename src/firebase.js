import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAusjkLLuF85jYgG_y_eMrbOoSFSSeYpL4",
  authDomain: "music-event-creator.firebaseapp.com",
  projectId: "music-event-creator",
  storageBucket: "music-event-creator.appspot.com",
  messagingSenderId: "883776650899",
  appId: "1:883776650899:web:e81f3cf33350d069419766",
};

//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const concertsCollection = db.collection("concerts");
const musiciansCollection = db.collection("musicians");

//create concert
export const createConcert = (concert) => {
  return concertsCollection.add(concert);
};

//get concert
export const getConcert = async (id) => {
  const concert = await concertsCollection.doc(id).get();
  return concert.exists ? concert.data() : null;
};

//fetch concerts
export const fetchConcerts = async () => {
  const concerts = await concertsCollection.get();
  return concerts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//get musician
export const getMusician = async (id) => {
  const musician = await musiciansCollection.doc(id).get();
  return musician.exists ? musician.data() : null;
};

//fetch musicians
export const fetchMusicians = async () => {
  const musicians = await musiciansCollection.get();
  return musicians.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
