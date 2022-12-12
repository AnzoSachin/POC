const sql = require('mssql')
const config = require('../dbconfig')


const saveItemToStore = async(req,res) =>{
    console.log("-----> userlogin",req.body)
    let data = req.body
      try {
        let pool = await sql.connect(config)
        await pool.request()
        .input("Item", sql.NVarChar,data.Email)
        .input("Quantity", sql.NVarChar,data.Password)
        .input("Bin", sql.NVarChar,data.Password)
        .execute("sp_Login")
        .then(result => {
          console.log(result)
          res.JSON("ooooooooooooooooooooooo")
        })
      } catch (error) {
        console.log(error)
      }
}


module.exports = {
    saveItemToStore
}



