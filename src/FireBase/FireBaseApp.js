// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth,setPersistence,signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


//Signout 

export const logoutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully.");

      // Remove key from localStorage
      localStorage.removeItem("isLoggedIn");
      console.log("Login status removed from localStorage.");
    })
    .catch((error) => {
      console.error("Error logging out:", error.message);
    });
};
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUQt081iPpCoQr9A9SEVZOMb5GFOGZ4Dk",
  authDomain: "e-commerce-clothes-30d42.firebaseapp.com",
  databaseURL: "https://e-commerce-clothes-30d42-default-rtdb.firebaseio.com",
  projectId: "e-commerce-clothes-30d42",
  storageBucket: "e-commerce-clothes-30d42.firebasestorage.app",
  messagingSenderId: "282739165365",
  appId: "1:282739165365:web:969d9d2a60f7ad2af016fc",
  measurementId: "G-19HSD556JC",
};


// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Set persistence to localStorage (this will keep the user logged in after a page reload)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // console.log("Persistence set to localStorage");
  })
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });

// Firestore service functions


export const saveCartToFirestore = async (userId, userName ,cartItems) => {
  try {
    // await setDoc(doc(db, "cartData", userId), { cartItems });

    const dataToSave = {
      cartItems: cartItems ? cartItems : [], // Use the ternary operator to set default value
    };
    await setDoc(doc(db, "cartData", userName.split(' ').join('')+userId),dataToSave);
    console.log("Cart items saved successfully!");
  } catch (error) {
    console.error("Error saving cart items:", error.message);
  }
};


export const loadCartFromFirestore = async (userId,userName) => {
  
  // console.log(userId)
  try {
    const docRef = doc(db, "cartData", userName.split(' ').join('')+userId);
    // console.log(docRef)
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data().cartItems)
  
  
    if (docSnap.exists()) {
      return docSnap.data().cartitems || [];
      // return docSnap.data().cartItems || [];
    }
    return [];
  } catch (error) {
    console.error("Error loading cart items:", error.message);
    return [];
  }
};
