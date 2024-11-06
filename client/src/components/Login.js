// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState(''); 
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); 

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!username || !password) {
//       setErrorMessage('Please fill in all fields');
//       return;
//     }

//     // Check if username ends with '@admin' to navigate to admin page
//     if (username.endsWith('@admin')) {
//       setErrorMessage('');
//       onLogin();
//       navigate('/admin-dashboard');
//     } else {
//       // Save non-admin user to local storage
//       const users = JSON.parse(localStorage.getItem('users')) || [];
//       users.push({ username, loginTime: new Date().toLocaleString() });
//       localStorage.setItem('users', JSON.stringify(users));
      
//       // If not '@admin', navigate to child interface (word puzzle game)
//       setErrorMessage('');
//       onLogin();
//       navigate('/word-puzzle');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>

//         {errorMessage && <p className="error">{errorMessage}</p>}

//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         <button type="submit" className="btn-submit">
//           Login
//         </button>
//       </form>
//        {/* Add link to Sign-Up page */}
//        <p className="signup-link">
//         Don’t have an account? <Link to="/signup">Sign up here</Link>
//       </p>

//     </div>
//   );
// };

// export default Login;




//vijaya 

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState(''); 
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!username || !password) {
//       setErrorMessage('Please fill in all fields');
//       return;
//     }

//     try {
//       // Send login data to the server to validate the user
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }), // sending username and password to the server
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // If login is successful, navigate to word puzzle page or admin-dashboard if username ends with '@admin'
//         setErrorMessage('');

//         if (username.endsWith('@admin')) {
//           onLogin();
//           navigate('/admin-dashboard');
//         } else {
//           onLogin();
//           navigate('/word-puzzle');
//         }
//       } else {
//         setErrorMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred during login');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>

//         {errorMessage && <p className="error">{errorMessage}</p>}

//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>

//         <button type="submit" className="btn-submit">
//           Login
//         </button>
//       </form>
//       <p className="signup-link">
//         Don’t have an account? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



// new code with admin authenticationnnn




import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!username || !password) {
  //     setErrorMessage('Please fill in all fields');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:5000/api/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setErrorMessage('');

  //       // Navigate based on user type
  //       if (data.isAdmin) {
  //         onLogin();
  //         navigate('/admin-dashboard');
  //       } else {
  //         onLogin();
  //         navigate('/word-puzzle');
  //       }
  //     } else {
  //       setErrorMessage(data.message || 'Login failed');
  //     }
  //   } catch (error) {
  //     setErrorMessage('An error occurred during login');
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!username || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setErrorMessage('');
  
        // Pass the username to onLogin so the parent can set it
        onLogin(username); // Pass the username here
  
        // Navigate based on user type
        if (data.isAdmin) {
          navigate('/admin-dashboard');
        } else {
          navigate('/word-puzzle');
        }
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred during login');
    }
  };
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
