import React from 'react';
import styles from './loginpage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <form>

          <div className={styles.inputSection}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" className={styles.inputField} />
          </div>
          
          <div className={styles.inputSection}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" className={styles.inputField} />
          </div>

          <button type="submit" className={styles.loginButton}>Login</button>

          <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
