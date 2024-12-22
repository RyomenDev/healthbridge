const firebaseConf = {
  FIREBASE_APIKEY: String(import.meta.env.VITE_FIREBASE_APIKEY),
  FIREBASE_AUTHDOMAIN: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
  FIREBASE_PROJECTID: String(import.meta.env.VITE_FIREBASE_PROJECTID),
  FIREBASE_STORAGEBUCKET: String(import.meta.env.VITE_FIREBASE_STORAGEBUCKET),
  FIREBASE_MESSAGINGSENDERID: String(
    import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID
  ),
  FIREBASE_APPID: String(import.meta.env.VITE_FIREBASE_APPID),
  FIREBASE_MEASUREMENTID: String(import.meta.env.VITE_FIREBASE_MEASUREMENTID),
};

// console.log("firebaseConf", firebaseConf);

export default firebaseConf;
