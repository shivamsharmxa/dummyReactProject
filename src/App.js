import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
// import LoginForm from './components/functional/form'
import LoginForm from './components/class/form'
  
function App() {
  const [isLoading] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Login to see magic
        <div className="login-form">
        <h2>Login</h2>
        <LoginForm />
        {isLoading && <h2>Loading...</h2>}
      </div>
      </header>
    </div>
  );
}

export default App;
