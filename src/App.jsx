// If statement
// import React, { useState } from 'react';
// import Greeting from './Greeting';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   let greetingMessage;
//   let buttonText;

//   if (isLoggedIn) {
//     greetingMessage = <Greeting isLoggedIn={true} />;
//     buttonText = 'Log out';
//   } else {
//     greetingMessage = <Greeting isLoggedIn={false} />;
//     buttonText = 'Log in';
//   }

//   return (
//     <div>
//       {greetingMessage}
//       <button onClick={toggleLogin}>{buttonText}</button>
//     </div>
//   );
// }

// export default App;





// Ternary
// import React, { useState } from 'react';
// import Greeting from './Greeting';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div>
//       <Greeting isLoggedIn={isLoggedIn} />
//       <button onClick={toggleLogin}>
//         {isLoggedIn ? 'Log out' : 'Log in'}
//       </button>
//     </div>
//   );
// }

// export default App;









// logical AND (&&
// import React, { useState } from 'react';
// import Greeting from './Greeting';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div>
//       {/* Greeting component will only render if isLoggedIn is true */}
//       {isLoggedIn && <Greeting isLoggedIn={true} />}

//       {/* Button for logging in or out */}
//       <button onClick={toggleLogin}>
//         {isLoggedIn ? 'Log out' : 'Log in'}
//       </button>
//     </div>
//   );
// }

// export default App;










// Switch Statements
// import React, { useState } from "react";
// import Greeting from "./Greeting";

// function App() {
//   const [userStatus, setUserStatus] = useState("guest"); // possible values: 'guest', 'user', 'admin'

//   const toggleStatus = () => {
//     if (userStatus === "guest") {
//       setUserStatus("user");
//     } else if (userStatus === "user") {
//       setUserStatus("admin");
//     } else {
//       setUserStatus("guest");
//     }
//   };

//   let message;

//   // Using switch statement to handle different user statuses
//   switch (userStatus) {
//     case "guest":
//       message = <h1>Welcome, guest! Please sign up.</h1>;
//       break;
//     case "user":
//       message = <Greeting isLoggedIn={true} />;
//       break;
//     case "admin":
//       message = <h1>Welcome, Admin! You have full access.</h1>;
//       break;
//     default:
//       message = <h1>Welcome!</h1>;
//   }

//   return (
//     <div>
//       {message}
//       <button onClick={toggleStatus}>
//         Switch Status (Current: {userStatus})
//       </button>
//     </div>
//   );
// }

// export default App;











// Rendering Multiple Elements Conditionally
// import React, { useState } from 'react';
// import Greeting from './Greeting';

// function App() {
//   const [userStatus, setUserStatus] = useState('guest'); // possible values: 'guest', 'user', 'admin'
//   const [notifications, setNotifications] = useState(false); // true if there are new notifications

//   const toggleStatus = () => {
//     if (userStatus === 'guest') {
//       setUserStatus('user');
//     } else if (userStatus === 'user') {
//       setUserStatus('admin');
//     } else {
//       setUserStatus('guest');
//     }
//   };

//   const toggleNotifications = () => {
//     setNotifications(!notifications);
//   };

//   let content;

//   // Conditionally render multiple elements using if statement
//   if (userStatus === 'guest') {
//     content = (
//       <div>
//         <h1>Welcome, guest! Please sign up.</h1>
//         <button onClick={toggleStatus}>Sign Up</button>
//       </div>
//     );
//   } else if (userStatus === 'user') {
//     content = (
//       <div>
//         <Greeting isLoggedIn={true} />
//         {notifications && <div>Now you are user!</div>}
//         <button onClick={toggleNotifications}>
//           {notifications ? 'Hide Notifications' : 'Show Notifications'}
//         </button>
//       </div>
//     );
//   } else if (userStatus === 'admin') {
//     content = (
//       <div>
//         <h1>Welcome, Admin! You have full access.</h1>
//         <button onClick={toggleStatus}>Log Out</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {content}
//       <button onClick={toggleStatus}>
//         Switch Status (Current: {userStatus})
//       </button>
//     </div>
//   );
// }

// export default App;










// Null rendering - example 1
// import React, { useState } from 'react';

// function App() {
//   const [showMessage, setShowMessage] = useState(true);

//   const toggleMessage = () => {
//     setShowMessage(!showMessage);
//   };

//   // If showMessage is false, return null (render nothing)
//   if (!showMessage) {
//     return null;
//   }

//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <button onClick={toggleMessage}>Toggle Message</button>
//     </div>
//   );
// }

// export default App;





// Null rendering - example 2
import React, { useState } from 'react';
import Greeting from './Greeting';

function App() {
  const [userStatus, setUserStatus] = useState('guest'); // possible values: 'guest', 'user', 'admin'
  const [showGreeting, setShowGreeting] = useState(true); // Flag to show/hide Greeting

  const toggleStatus = () => {
    if (userStatus === 'guest') {
      setUserStatus('user');
    } else if (userStatus === 'user') {
      setUserStatus('admin');
    } else {
      setUserStatus('guest');
    }
  };

  const toggleGreeting = () => {
    setShowGreeting(!showGreeting);
  };

  // Conditionally render nothing if showGreeting is false
  if (!showGreeting) {
    return null;
  }

  return (
    <div>
      <h1>Current Status: {userStatus}</h1>
      <Greeting isLoggedIn={userStatus === 'user' || userStatus === 'admin'} />
      <button onClick={toggleStatus}>Switch Status</button>
      <button onClick={toggleGreeting}>
        {showGreeting ? 'Hide Greeting' : 'Show Greeting'}
      </button>
    </div>
  );
}

export default App;