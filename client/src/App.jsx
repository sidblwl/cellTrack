import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CellLineWrapper from './components/CellLineWrapper.jsx'
import LineInfo from './components/LineInfo.jsx'
import CreateLine from './components/CreateLine.jsx'
import { Routes, Route, useParams, Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from './components/GoogleAuth.jsx';

function App() {
  const handleGoogleLoginSuccess = (response) => {
    // Handle successful Google login (e.g., save user data, redirect, etc.)
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle failed Google login
    console.error('Google login error:', error);
  };

  return (
    <>
        <Routes>
          <Route path="/" element={<CellLineWrapper/>} />
          <Route path=":id" element={<LineInfo/>} />
          <Route path="create" element={<CreateLine/>} />
          {/* <Route path="/" element={<GoogleAuth onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} />} /> */}
          {/* https://medium.com/@amaancr7777/step-by-step-guide-integrating-google-authentication-in-react-js-fbf9c4ce358f
          https://www.dhiwise.com/post/react-google-oauth-the-key-to-secure-and-quick-logins */}
        </Routes>
    </>
  )
}

export default App
