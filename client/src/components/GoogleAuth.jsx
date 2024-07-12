import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = ({ onSuccess, onFailure }) => {
  const clientId = '697469342538-403hpn6p0dh5avnnn0r32gctlqg1ecsl.apps.googleusercontent.com';

  const handleSuccess = (response) => {
    console.log('Google login successful:', response);
    onSuccess(response);
  };

  const handleFailure = (error) => {
    console.error('Google login failed:', error);
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleAuth;