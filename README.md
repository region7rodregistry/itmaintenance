# IT Equipment Maintenance Schedule

A web-based maintenance checklist system for IT equipment with Firebase data persistence for August checkboxes.

## Features

- Monthly maintenance schedule for IT equipment
- Automatic checkbox population based on frequency (Daily, Weekly, Monthly)
- **August data persistence** - Checkbox states are saved to Firebase Firestore and restored on page refresh
- User selection with links to individual IT infrastructure inventories
- Responsive design for mobile and desktop
- Real-time data synchronization across devices

## Setup Instructions

### Prerequisites
- A Firebase project with Firestore database enabled
- Modern web browser

### Firebase Setup

1. **Create a Firebase project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Firestore Database:**
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location close to your users

3. **Get your Firebase config:**
   - In Firebase Console, go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click the web app icon (</>) to add a web app
   - Register your app and copy the config object

4. **Update the configuration:**
   - Open `firebase-config.js`
   - Replace the placeholder values with your actual Firebase config

### Installation

1. **Update Firebase config:**
   ```javascript
   // In firebase-config.js
   const firebaseConfig = {
       apiKey: "your-actual-api-key",
       authDomain: "your-project-id.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "your-sender-id",
       appId: "your-app-id"
   };
   ```

2. **Open the application:**
   - Simply open `checklist.html` in your web browser
   - Or serve it using any local web server

## How to Use

1. **Select a user** from the dropdown menu
2. **Select a month** from the month dropdown
3. **For August specifically:**
   - Check/uncheck boxes as needed
   - All changes are automatically saved to Firebase Firestore
   - When you refresh the page, your checkbox states will be restored
   - Data syncs across all devices in real-time
4. **For other months (Jan-Jul):**
   - Checkboxes are auto-populated based on frequency
   - Changes are not persisted

## Data Storage

- August checkbox states are saved in Firebase Firestore
- Collection: `maintenance-data`
- Document: `august-2025`
- Data structure:
  ```json
  {
    "user": "Selected User Name",
    "checkboxes": {
      "0-1": true,
      "0-2": false,
      "1-1": true,
      ...
    },
    "lastUpdated": "2025-01-15T10:30:00.000Z"
  }
  ```
- Key format: `"rowIndex-day"` (e.g., "0-1" = row 0, day 1)

## File Structure

```
itmaintenance/
├── checklist.html      # Main application file
├── firebase-config.js  # Firebase configuration
├── icons/              # Logo and icon files
└── README.md          # This file
```

## Security Rules (Firestore)

For production use, set up proper Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /maintenance-data/{document} {
      allow read, write: if true; // For development only
      // For production, implement proper authentication
    }
  }
}
```

## Troubleshooting

- If data doesn't save, check your Firebase configuration in `firebase-config.js`
- Ensure Firestore is enabled in your Firebase project
- Check browser console for any Firebase-related errors
- The system includes localStorage fallback if Firebase is unavailable

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Advantages of Firebase

- **No server setup required** - Firebase handles the backend
- **Real-time synchronization** - Changes appear instantly across devices
- **Automatic scaling** - Firebase handles traffic spikes
- **Built-in security** - Firebase provides authentication and security rules
- **Offline support** - Data syncs when connection is restored

## License

MIT License
