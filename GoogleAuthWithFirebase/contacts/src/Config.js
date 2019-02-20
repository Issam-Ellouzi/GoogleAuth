<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.js"></script>
<link rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />

  // Initialize Firebase
  var Config = {
    apiKey: "AIzaSyBe4D-YbosgX24RLAey-6yzuN9XOco5Dzs",
    authDomain: "contacts-d6df6.firebaseapp.com",
    databaseURL: "https://contacts-d6df6.firebaseio.com",
    projectId: "contacts-d6df6",
    storageBucket: "contacts-d6df6.appspot.com",
    messagingSenderId: "987004886909",

    clientId: " 331512013917-tc64eq4esd88uj25b7hjmdurqe8bpkqc.apps.googleusercontent.com ",

    scopes: [
        "email",
        "profile",
        "https://www.googleapis.com/auth/contacts",
        "https://www.googleapis.com/auth/contacts",	                 //See, edit, download, and permanently delete your contacts
        "https://www.googleapis.com/auth/contacts.readonly"	,            //See and download your contacts
       " https://www.googleapis.com/auth/plus.login    "    ,           //	Know the list of people in your circles, your age range, and language
        "https://www.googleapis.com/auth/user.addresses.read  ",        //	View your street addresses
       " https://www.googleapis.com/auth/user.birthday.read"	,       // View your complete date of birth
      "  https://www.googleapis.com/auth/user.emails.read",	            // View your email addresses
       " https://www.googleapis.com/auth/user.phonenumbers.read " ,     //	View your phone numbers
      "  https://www.googleapis.com/auth/userinfo.email" ,               //	View your email address
      "  https://www.googleapis.com/auth/userinfo.profile " ,    	// View your basic profile info
      "https://www.googleapis.com/auth/contacts.readonly"
]
  };
