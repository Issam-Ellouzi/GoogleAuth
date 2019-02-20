import React, { Component } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios'

class App extends Component {
  getContact = (access_token) => {
    console.log(access_token)
    return axios.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + encodeURIComponent(access_token) + "&alt=json&max-results=2000",
    {
      
      headers: {
        'Access-Control-Allow-Origin': '*',
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      
      }})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })   
    .catch(function (error) {
      console.log(error);
    }) 
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response["accessToken"]);
      this.getContact(response["accessToken"]);
    }
    return (
      <div className="App">
        <header className="App-header">
        <span>
        
          <h1 className="text">Welcome </h1>
         

        </span>
          <GoogleLogin
    clientId="254577821599-d0flfd670669qd0u8ieufhrmph5vdavi.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
        </header>
      </div>
    );
  }
}

export default App;
