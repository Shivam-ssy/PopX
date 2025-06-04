import { v4 as uuidv4 } from 'uuid';

class AuthManager {
  constructor() {
    this.storageKey = 'users'; 
    this.currentUserKey = 'currentUserId'; 
  }

  // Get users from localStorage
  _getUsers() {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : {};
  }

  // Save users to localStorage
  _saveUsers(users) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Sign up a new user
  signUp(userData) {
    const { fullName, phoneNumber, emailAddress, password, companyName, isAgency } = userData;
    console.log(userData);
    
    const users = this._getUsers();
    if (!phoneNumber || !emailAddress || !password || !fullName) {
        throw new Error('Full Name, Phone Number, Email Address, Password are required')
    }

    // Check if user already exists
    const existingUser = Object.values(users).find(user => user.emailAddress === emailAddress);
    if (existingUser) {
      throw new Error('User already exists with this email address.');
    }

    const userId = uuidv4();
    users[userId] = {
      id: userId,
      fullName,
      phoneNumber,
      emailAddress,
      password, 
      companyName,
      isAgency,
    };

    this._saveUsers(users);
    return { success: true, userId };
  }

  // Login a user
  login(email, password) {
    const users = this._getUsers();

    const userEntry = Object.entries(users).find(
      ([_, user]) => user.emailAddress === email && user.password === password
    );

    if (!userEntry) {
      throw new Error('Invalid email or password.');
    }

    const [userId] = userEntry;
    localStorage.setItem(this.currentUserKey, userId);
    return { success: true, userId };
  }

  // Get current user profile
  getProfile() {
    const userId = localStorage.getItem(this.currentUserKey);
    if (!userId) {
      throw new Error('No user is currently logged in.');
    }

    const users = this._getUsers();
    const user = users[userId];
    if (!user) {
      throw new Error('User not found.');
    }

    // Do not expose password
    const { password, ...profile } = user;
    return profile;
  }

  // Logout
  logout() {
    localStorage.removeItem(this.currentUserKey);
  }
}

const authManager= new AuthManager()

export {authManager}
