const express = require('express')
const app = express()
const sql = require('mssql')
const config = require('./dbconfig')
app.use(express.json())

let SaveItemInStore = require('./Routes/save.routes')


   
app.use('/save/itemtostore',SaveItemInStore)

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