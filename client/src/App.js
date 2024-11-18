// // import React, {useState} from 'react';
// // import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// // import Login from './components/Login';
// // import AdminDashboard from './components/AdminDashboard';
// // import WordPuzzleGame from './components/WordPuzzleGame';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <h1>Word Puzzle Game</h1>
// // //       <WebcamCapture /> {/* This will run in the background */}
// // //       <WordPuzzleGame /> {/* Show the game */}
// // //     </div>
// // //   );
// // // }
// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Login from './components/Login';
// // // import AdminDashboard from './components/AdminDashboard';
// // // import WordPuzzleGame from './components/WordPuzzleGame';

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   const handleLogin = () => {
// //     setIsLoggedIn(true);
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route
// //           path="/admin-dashboard"
// //           element={
// //             isLoggedIn ? (
// //               <AdminDashboard />
// //             ) : (
// //               <Login onLogin={handleLogin} />
// //             )
// //           }
// //         />
// //         <Route
// //           path="/word-puzzle"
// //           element={
// //             isLoggedIn ? (
// //               <WordPuzzleGame />
// //             ) : (
// //               <Login onLogin={handleLogin} />
// //             )
// //           }
// //         />
// //         <Route path="/" element={<Login onLogin={handleLogin} />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import DetailedAnalysis from './components/DetailedAnalysis';
// import DetailedImages from './components/DetailedImages';
// import AdminDashboard from './components/AdminDashboard';
// import WordPuzzleGame from './components/WordPuzzleGame';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Default Login Route */}
//         <Route path="/" element={<Login onLogin={handleLogin} />} />

//         {/* Admin Dashboard Route */}
//         <Route
//           path="/admin-dashboard"
//           element={isLoggedIn ? <AdminDashboard /> : <Login onLogin={handleLogin} />}
//         />

//         {/* Word Puzzle Game Route */}
//         <Route
//           path="/word-puzzle"
//           element={isLoggedIn ? <WordPuzzleGame /> : <Login onLogin={handleLogin} />}
//         />

//         {/* Detailed Analysis Route */}
//         <Route
//           path="/detailed-analysis/:username"
//           element={isLoggedIn ? <DetailedAnalysis /> : <Login onLogin={handleLogin} />}
//         />

//         {/* Detailed Images Route */}
//         <Route path="/detailed-images" element={<DetailedImages />} />

//         {/* Route for analysis summary */}
//         <Route path="/analysis-summary" element={<DetailedAnalysis />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import WordPuzzleGame from './components/WordPuzzleGame';
import SignUpPage from './components/SignUpPage';  // Import the SignUpPage component
import DetailedAnalysis from './components/DetailedAnalysis';  // Import DetailedAnalysis
import DetailedImages from './components/DetailedImages';  // Import DetailedImages
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setIsLoggedIn(true);
    setLoggedInUsername(loggedInUsername); // Store the username
  };

  return (
    <Router>
      <Routes>
        {/* Default Login Route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Admin Dashboard Route */}
        <Route 
          path="/admin-dashboard" 
          element={isLoggedIn ? <AdminDashboard username={loggedInUsername} /> : <Login onLogin={handleLogin} />} 
        />

        {/* Word Puzzle Game Route */}
        <Route 
          path="/word-puzzle" 
          element={isLoggedIn ? <WordPuzzleGame loggedInUsername={loggedInUsername} /> : <Login onLogin={handleLogin} />} 
        />

        {/* Sign-Up Page Route */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* Detailed Analysis Route */}
        <Route 
          path="/detailed-analysis/:username/:sessionId" 
          element={isLoggedIn ? <DetailedAnalysis username={loggedInUsername} /> : <Login onLogin={handleLogin} />} 
        />

        {/* Detailed Images Route */}
        <Route 
          path="/detailed-images/:username/:sessionId" 
          element={isLoggedIn ? <DetailedImages username={loggedInUsername} /> : <Login onLogin={handleLogin} />} 
        />

        {/* Analysis Summary Route */}
        <Route 
          path="/analysis-summary" 
          element={isLoggedIn ? <DetailedAnalysis username={loggedInUsername} /> : <Login onLogin={handleLogin} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;