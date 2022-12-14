import React from "react";
import axios from 'axios'
//const baseURL = 'http://192.168.31.207:5000/save' 

const saveApi = {
    saveItemToStore : function(data) {
    
        console.log("saveItemToStore",data)
      return axios.post('http://192.168.31.206:5000/itemtostore',data)
    },
    fetchItemFromStore :function(data) {
      return axios.post('http://192.168.31.206:5000/fetchfromtostore',data)
    }
}

export default saveApi