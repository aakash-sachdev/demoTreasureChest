// import React, { useState } from "react";
// import { addUser } from "../services/userService";

// const NewUserForm = ({ onAddUser }) => {
//   const [name, setName] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name !== "") {
//       setLoading(true);
//       const newUser = { name };
//       addUser(newUser)
//           .then((user) => {
//               onAddUser(user);
//               setName("");
//               setError(null);
//           })
//           .catch((error) => {
//               setError("Error adding user.");
//           })
//           .finally(() => {
//               setLoading(false);
//           });
//     }
//   };

//   return (
//     <div className="mt-5">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">
//             Name
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
//           {loading ? "Adding..." : "Add User"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewUserForm;
