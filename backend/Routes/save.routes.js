const express = require('express')
const router = express.Router();
const app = express()

let SaveItemController = require('../Controller/save.controller')



app.post('/',SaveItemController.saveItemToStore)
















module.exports = router ;