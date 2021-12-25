import React from "react";
import axios from 'axios'

 const dataApi= axios.create({
    baseURL:"https://fakestoreapi.com/"
})

export default dataApi