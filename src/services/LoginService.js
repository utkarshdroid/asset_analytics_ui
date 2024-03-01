// // src/services/LoginService.js

// const DUMMY_API_ENDPOINT = 'http://0.0.0.0:8000/login';

// // Dummy function to simulate an API call
// const login = async (username, password) => {
//   try {
//     // This is how you would typically send a request to an API endpoint.
//     const response = await fetch(DUMMY_API_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     // In a real-world scenario, you would check the response status and parse the JSON.
//     if (response.ok) {
//       const data = await response.json();
//       // You'd typically want to check data for a success message or token, etc.
//       return { success: true, data };
//     } else {
//       // If the API endpoint returned an HTTP status code outside the 2xx range.
//       return { success: false, error: 'Invalid credentials' };
//     }
//   } catch (error) {
//     // If there was an error sending the request (e.g., network error).
//     return { success: false, error: error.message };
//   }
// };

// export default login;

const USERNAME = 'root';
const PASSWORD = 'root';

// Dummy token generation for demonstration purposes
const generateToken = () => btoa(new Date().toISOString());

const login = async (username, password) => {
  // Simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if the credentials match the hardcoded ones
  if (username === USERNAME && password === PASSWORD) {
    const token = generateToken(); // Generate a dummy token
    const expirationTime = new Date(new Date().getTime() + 15 * 60000); // Current time + 15 minutes

    // Store the token and its expiration time in local storage
    const tokenObj = { token, expirationTime: expirationTime.toISOString() };
    localStorage.setItem('loginToken', JSON.stringify(tokenObj));

    return { success: true, token };
  } else {
    return { success: false, error: 'Invalid credentials' };
  }
};

export default login;
