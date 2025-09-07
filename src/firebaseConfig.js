import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeeutlG2wnquifHsi1K-vYZUmAykPM_iI",
  authDomain: "taskpusher-377dr.firebaseapp.com",
  projectId: "taskpusher-377dr",
  storageBucket: "taskpusher-377dr.firebasestorage.app",
  messagingSenderId: "1068427763391",
  appId: "1:1068427763391:web:fbd59798a47c6dfb88700a"
};

export const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;