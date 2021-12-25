import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import ImageSlider from './counter/slider'; 
// import { sliderData } from './counter/images';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ImageSlider slides={sliderData}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



