// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate(); // For redirection

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     setUsers(storedUsers);
//   }, []);

//   const handleViewAnalysis = (username) => {
//     navigate(`/detailed-analysis/${username}`);
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <h2>Logged-in Users:</h2>
//       {users.length > 0 ? (
//         <ul>
//           {users.map((user, index) => (
//             <li key={index}>
//               <strong>Username:</strong> {user.username} <br />
//               <strong>Login Time:</strong> {user.loginTime} <br />
//               <button onClick={() => handleViewAnalysis(user.username)}>
//                 View Emotion Analysis
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No users have logged in yet.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




// new users from mongodb



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For redirection

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Fetch users from your API
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Set the fetched users in state
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchUsers();
  }, []);

  const handleViewAnalysis = (username) => {
    navigate(`/detailed-analysis/${username}`);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Logged-in Users:</h2>
      {loading ? (
        <p>Loading users...</p> // Show loading message while fetching
      ) : users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Username:</strong> {user.username} <br />
              <strong>Login Time:</strong> {user.loginTime} <br />
              <button onClick={() => handleViewAnalysis(user.username)}>
                View Emotion Analysis
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users have logged in yet.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
