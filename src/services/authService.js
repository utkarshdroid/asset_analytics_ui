// Function to check if token is valid
export function isTokenValid() {
    const tokenStr = localStorage.getItem('loginToken');
    if (!tokenStr) {
      return false;
    }
  
    const { expirationTime } = JSON.parse(tokenStr);
    const isExpired = new Date() > new Date(expirationTime);
    if (isExpired) {
      localStorage.removeItem('loginToken'); // Clear expired token
      return false;
    }
  
    return true;
  }
  