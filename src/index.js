import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Example from './navBarReactStra';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeNavBar from  './Layout/Navbar/navbar';
import ModalPost from './Components/Modal/AddPostModel/modal';

ReactDOM.render(
  <React.StrictMode>
    <WelcomeNavBar/>
    <ModalPost/>
    {/* <Example/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
