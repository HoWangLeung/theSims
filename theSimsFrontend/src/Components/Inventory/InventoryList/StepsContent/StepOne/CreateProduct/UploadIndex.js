import React, { useState, useEffect } from 'react'
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import firebase from "firebase/app"
import "firebase/storage"
 

const firebaseConfig = {
    apiKey: "AIzaSyD3_ytBE7CO2MytqtM8axYy3KdK4UzbrL0",
    authDomain: "reactspringbootorder.firebaseapp.com",
    projectId: "reactspringbootorder",
    storageBucket: "reactspringbootorder.appspot.com",
    messagingSenderId: "173075491169",
    appId: "1:173075491169:web:e6b0ff2bad6b534306bd20",
    measurementId: "G-YVK02QLC8H"
  };
  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage()
  export{storage, firebase as default}