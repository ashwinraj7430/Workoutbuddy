const express = require('express')
const app = express()
const WorkoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')



require('dotenv').config()


const cors = require('cors');

app.use(cors()); 

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
// app.get('/',(req,res)=>{
//     res.json({msg:'welcome to the app'})
// })

app.use('/api/workouts', WorkoutRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app listening to port`, process.env.PORT)
        })
    }
    )
    .catch(()=>{
        console.log('error')
    })

// app.listen(process.env.PORT, () => {
//     console.log(`app listening to port`, process.env.PORT)
// })