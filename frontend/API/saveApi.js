import React from "react";
import axios from 'axios'
const baseURL = 'http://192.168.31.207:5000/save' 

const saveApi = {
    saveItemToStore : function(data) {
      axios({
        method: 'post',
        url: 'http://192.168.31.206:5000/save/itemtostore',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: {
          data: data
        }
      });
      //   console.log("saveItemToStore",data)
      // return axios.post('http://192.168.31.206:5000/save/itemtostore', 
      //   {
      //     data:data
      //    })
    }
}

export default saveApi