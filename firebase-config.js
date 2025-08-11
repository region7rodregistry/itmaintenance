// Firebase Configuration
// Replace these values with your actual Firebase project credentials

const firebaseConfig = {
    apiKey: "AIzaSyAO-UqQDx0uPLiMwpZInuB_p5RAC7pRbWY",
    authDomain: "itmaintenance-a13e1.firebaseapp.com",
    projectId: "itmaintenance-a13e1",
    storageBucket: "itmaintenance-a13e1.firebasestorage.app",
    messagingSenderId: "175091964720",
    appId: "1:175091964720:web:5a8711a27aefd0a25246f5",
    measurementId: "G-5VFMQE71H3",
    databaseURL: "https://itmaintenance-a13e1-default-rtdb.firebaseio.com"
  };

// Export the config for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firebaseConfig;
} else {
    // For browser usage
    window.firebaseConfig = firebaseConfig;
}
