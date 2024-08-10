// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { addUser, fetchUsers } from '../../services/UserServices';

// const AddUserForm = () => {
//     const navigate = useNavigate();
//     const [userList, setUserList] = useState([]);

//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [verifyEmail, setVerifyEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [verifyPassword, setVerifyPassword] = useState("");

//     useEffect(() => {
//         fetchUsers()
//         .then(setUserList)
//         .catch((error) => {
//             console.error("There was an error fetching the users", error);
//         });
//     }, []);

//     const usernameExists = (username) => {
//         return userList.some(row => row.username === username);
//     };

//     const emailExists = (email) => {
//         return userList.some(row => row.email === email);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (usernameExists(username)) {
//             alert('Username already exists');
//             return;
//         }

//         if (emailExists(email)) {
//             alert('Email already exists');
//             return;
//         }

//         if (verifyEmail !== email) {
//             alert('Emails do not match');
//             return;
//         }

//         if (verifyPassword !== password) {
//             alert('Passwords do not match');
//             return;
//         }

//         if (username && email && verifyEmail && password && verifyPassword) {
//             try {
//                 await addUser(username, email, password);
//                 navigate("/");
//             } catch (error) {
//                 console.error("There was an error creating the user!", error);
//             }
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label className="form-label">
//                         Username
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="form-group">
//                     <label className="form-label">
//                         Email
//                         <input
//                             type="email"
//                             className="form-control"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="form-group">
//                     <label className="form-label">
//                         Verify Email
//                         <input
//                             type="email"
//                             className="form-control"
//                             value={verifyEmail}
//                             onChange={(e) => setVerifyEmail(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="form-group">
//                     <label className="form-label">
//                         Password
//                         <input
//                             type="password"
//                             className="form-control"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div className="form-group">
//                     <label className="form-label">
//                         Verify Password
//                         <input
//                             type="password"
//                             className="form-control"
//                             value={verifyPassword}
//                             onChange={(e) => setVerifyPassword(e.target.value)}
//                             required
//                         />
//                     </label>
//                 </div>

//                 <button type="submit" className="submit-button">
//                     Register
//                 </button>
//             </form>

//             <p>Already have an account? <Link to="/login">Login</Link></p>
//         </>
//     );
// };

// export default AddUserForm;
