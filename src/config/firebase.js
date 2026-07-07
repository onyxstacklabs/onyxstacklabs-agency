// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// OnyxStack Labs Web Production Environment Matrix
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY", // Replace with your production credentials when ready
  authDomain: "onyxstacklabs-agency.firebaseapp.com",
  projectId: "onyxstacklabs-agency",
  storageBucket: "onyxstacklabs-agency.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Cloud Core Instance
const app = initializeApp(firebaseConfig);

// Initialize Relational Document Layer
export const db = getFirestore(app);

/**
 * Universal Lead Pipeline Push Function
 * @param {Object} data - Production parameters captured from form state
 */
export const transmitLeadToFirebase = async (data) => {
  try {
    const leadRef = collection(db, "agency_leads");
    const payload = {
      ...data,
      status: "pending_verification",
      timestamp: serverTimestamp()
    };
    
    const docRef = await addDoc(leadRef, payload);
    console.log("Firebase Node Sync Successful. Transmitted ID:", docRef.id);
    return { success: true, nodeRef: docRef.id };
  } catch (error) {
    console.error("Firebase Critical Database Error:", error);
    return { success: false, error: error.message };
  }
};
