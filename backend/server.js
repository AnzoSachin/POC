const express = require('express')
const app = express()
const sql = require('mssql')
const config = require('./dbconfig')
app.use(express.json())

let SaveItemInStore = require('./Routes/save.routes.js')


   
//app.use('/itemtostore',SaveItemInStore)

app.post('/itemtostore',async(req,res)=>{
 
  let data = req.body
  console.log("-----> itemtostore",data)
 
  try {
    let pool = await sql.connect(config)
    await pool.request()
    .input("Item", sql.NVarChar,data.item)
    .input("Quantity", sql.Int,data.quantity)
    .input("Bin", sql.NVarChar,data.bin)
    .execute("[sp_saveToStore]")
    .then(result => {
      console.log(result)
      //.JSON("ooooooooooooooooooooooo")
    })
  } catch (error) {
    console.log(error)
  }
})

app.post('/fetchfromtostore',async(req,res)=>{
 
  let data = req.body
  console.log("-----> itemtostore",data)
 
  try {
    let pool = await sql.connect(config)
    await pool.request()
    .input("Item", sql.NVarChar,data.item)
    .input("Quantity", sql.NVarChar,data.quantity)
    .input("Bin", sql.NVarChar,data.bin)
    .execute("sp_Login")
    .then(result => {
      console.log(result)
     // res.JSON("ooooooooooooooooooooooo")
    })
  } catch (error) {
    console.log(error)
  }
})

app.post('/userlogin',async(req,res)=>{
    console.log("-----> userlogin",req.body)
    let data = req.body
      try {
        let pool = await sql.connect(config)
        await pool.request()
        .input("uname", sql.NVarChar,data.Email)
        .input("pass", sql.NVarChar,data.Password)
        .execute("sp_Login")
        .then(result => {
          console.log(result)
        })
      } catch (error) {
        console.log(error)
      }
})








const port = 5000
app.listen(port)
console.log("server is running at",port)