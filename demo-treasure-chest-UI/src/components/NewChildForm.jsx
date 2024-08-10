// import React, { useState } from "react";
// import { addChild } from "../services/childService";

// const NewChildForm = ({ onAddChild }) => {
//   const [name, setName] = useState("");
//   const [userId, setUserId] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name !== "" && userId !== "") {
//       setLoading(true);
//       const newChild = { name, userId };
//       addChild(newChild)
//         .then((child) => {
//           onAddChild(child);
//           setName("");
//           setUserId("");
//           setError(null);
//         })
//         .catch((error) => {
//           setError("Error adding child.");
//         })
//         .finally(() => {
//           setLoading(false);
//         });
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
//         <div className="mb-3">
//           <label className="form-label">
//             User ID
//             <input
//               type="text"
//               className="form-control"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
//           {loading ? "Adding..." : "Add Child"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewChildForm;
