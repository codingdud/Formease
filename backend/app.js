const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const { default: mongoose } = require('mongoose')


const app=express()

app.use(express.json())
app.use(cors())

dotenv.config({path:'./.env.local'})



app.use('/api/fdata',require('./routes/fdata-route'));
app.use('/api/sdata',require('./routes/sdata-route'));





//conneting to database and listing to port
const mongoid=process.env.MID
let db=process.env.DB||"database"
mongoose.connect(`${mongoid}${db}?retryWrites=true&w=majority`)
    .then(()=>{
        const port=process.env.PORT||3001
            app.listen(port,()=>{
            console.log(`connect to port:${port}
            database is active`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })




