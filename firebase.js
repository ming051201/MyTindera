import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    signInWithCustomToken,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

setLogLevel('debug');

// --- Firebase Config and Initialization ---
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
let userId;

// --- DOM Elements ---
const authPage = document.getElementById('authPage');
const welcomePage = document.getElementById('welcomePage');
const authTitle = document.getElementById('authTitle');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const firstNameInput = document.getElementById('firstNameInput');
const middleNameInput = document.getElementById('middleNameInput');
const surnameInput = document.getElementById('surnameInput');
const authButton = document.getElementById('authButton');
const switchAuthMode = document.getElementById('switchAuthMode');
const switchText = document.getElementById('switchText');
const messageElement = document.getElementById('message');
const userEmailDisplay = document.getElementById('userEmailDisplay');
const signOutButton = document.getElementById('signOutButton');

let isSignInMode = true;

// --- Authentication Functions ---
const handleAuth = async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    messageElement.textContent = '';
    messageElement.classList.add('hidden');

    if (isSignInMode) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Sign in successful!");
        } catch (error) {
            console.error("Sign-in error:", error);
            showMessage(`Error: ${error.message}`, 'error');
        }
    } else {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional user info to Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstNameInput.value,
                middleName: middleNameInput.value,
                surname: surnameInput.value,
                email: email
            });

            console.log("Sign up successful and user data saved!");
            showMessage("Account registered!", 'success');
        } catch (error) {
            console.error("Sign-up error:", error);
            showMessage(`Error: ${error.message}`, 'error');
        }
    }
};

const handleSignOut = async () => {
    try {
        await signOut(auth);
        console.log("User signed out.");
        showMessage("Signed out successfully!", 'success');
    } catch (error) {
        console.error("Sign-out error:", error);
        showMessage(`Error: ${error.message}`, 'error');
    }
};

const showMessage = (message, type) => {
    messageElement.textContent = message;
    messageElement.style.color = type === 'error' ? 'red' : 'green';
    messageElement.classList.remove('hidden');
};

const showPage = (pageName) => {
    if (pageName === 'auth') {
        authPage.classList.remove('hidden');
        welcomePage.classList.add('hidden');
    } else if (pageName === 'welcome') {
        authPage.classList.add('hidden');
        welcomePage.classList.remove('hidden');
    }
};

// --- UI Logic ---
const toggleAuthMode = () => {
    isSignInMode = !isSignInMode;
    messageElement.classList.add('hidden'); // Hide messages on mode switch
    // Get all elements with the class 'signup-field'
    const signupFields = document.querySelectorAll('.signup-field');
    if (isSignInMode) {
        authTitle.textContent = 'Sign In';
        authButton.textContent = 'Sign In';
        switchText.textContent = "Don't have an account?";
        switchAuthMode.textContent = "Sign Up";
        // Hide signup fields
        signupFields.forEach(field => field.classList.add('hidden'));
    } else {
        authTitle.textContent = 'Sign Up';
        authButton.textContent = 'Sign Up';
        switchText.textContent = "Already have an account?";
        switchAuthMode.textContent = "Sign In";
        // Show signup fields
        signupFields.forEach(field => field.classList.remove('hidden'));
    }
};

// --- Event Listeners ---
authButton.addEventListener('click', handleAuth);
switchAuthMode.addEventListener('click', toggleAuthMode);
signOutButton.addEventListener('click', handleSignOut);

// This listener now handles page navigation
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is signed in:", user.uid);
        userEmailDisplay.textContent = `You are signed in as: ${user.email}`;
        showPage('welcome');
    } else {
        console.log("No user is signed in.");
        showPage('auth');
    }
});

// --- Initial anonymous sign-in ---
const initialSignIn = async () => {
    const __initial_auth_token = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : undefined;
    try {
        if (__initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
    } catch (error) {
        console.error("Initial sign-in failed:", error);
    }
};

initialSignIn();
