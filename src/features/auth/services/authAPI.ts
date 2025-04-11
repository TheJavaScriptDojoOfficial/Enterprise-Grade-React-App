export const loginUser = async (email: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        resolve('fake-jwt-token-123456789');
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 2000); // Simulate network delay
  });
};
