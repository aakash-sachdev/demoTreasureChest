// import axios from "axios";

// const BASEAPIURL = "http://localhost:8080/api/user";

// //For authorized admin
// //Will refactor for better security later
// export const fetchUsers = async () => {
//   try {
//     const response = await axios.get(`${BASEAPIURL}/all`);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error fetching all Users!", error);
//     throw error;
//   }
// };

// // export const addUser = async (username, email, password) => {
// //   try {
// //     const response = await axios.post(`${BASEAPIURL}/registration`, null, {
// //       params: { username, password, email },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error("There was an error creating the User!", error);
// //     throw error;
// //   }
// // };
// export const addUser = async (username, email, password) => {
//   try {
//     const response = await axios.post(
//       `${BASEAPIURL}/registration`,
//       {
//         username,
//         email,
//         pwHash: password
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("There was an error creating the User!", error);
//     throw error;
//   }
// };

// export const deleteUser = async (userId) => {
//   try {
//     await axios.post(`${BASEAPIURL}/delete`, null, {
//       params: { userId },
//     });
//   } catch (error) {
//     console.error("There was an error deleting the User!", error);
//     throw error;
//   }
// };

import axios from "axios";

const BASEAPIURL = "http://localhost:8080";


export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/all`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching all Users!", error);
    throw error;
  }
};

export const addUser = async (username, email, password) => {
  const userData = {
    username,
    email,
    verifyEmail: email,
    password,
    verifyPassword: password
  };

  try {
    const response = await axios.post(`${BASEAPIURL}/registration`, userData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
    console.log(response.data, response.status, response.data.token);
    return response.data;
  } catch (error) {
    const errorData = error.response.data;
    let allDefaultMessages = [];

  
    for (let i = 0; i < errorData.length; i++) {  
      allDefaultMessages.push(errorData[i].defaultMessage);
    }

    console.error("Error registering new user!", allDefaultMessages);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.post(`${BASEAPIURL}/delete`, null, {
      params: { userId },
    });
  } catch (error) {
    console.error("There was an error deleting the User!", error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  const loginData = {
    username,
    password
  };

  try {
    const response = await axios.post(`${BASEAPIURL}/login`, loginData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error("Error logging in user!", errorMessage);
    throw new Error(errorMessage);
  }
};