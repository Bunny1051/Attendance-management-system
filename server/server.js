const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

require('./srcs/db/db')

const controller = require('./srcs/controller/controller')
const app = express()

app.use(morgan("dev"))

app.use(cors({origin:"*"}));


app.use(bodyparser.json());
app.listen(3000 ,() =>{
    console.log("server connected :3000");
   
})

app.use('/ams', controller);














// app.use(cors())
// const port = 3000

// app.get('/getData', (req, res) => { 
// res.json({
//              "statusCode" :200,
//              "statusMessage" :"Success"
//       })
  
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })