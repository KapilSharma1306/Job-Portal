import exress from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { connectDB } from './utils/db.js'
import userRoute from './Routes/user.route.js'
import companyRoute from './Routes/company.route.js'
import jobRoute from './Routes/job.route.js'
import applicationRoute from './Routes/application.route.js'

const app = exress()
dotenv.config()
app.use(exress.json())
app.use(exress.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
     origin:'http://localhost:5173',
     credentials:true
}))

app.use('/api/v1/user',userRoute)
app.use('/api/v1/company',companyRoute)
app.use('/api/v1/job',jobRoute)
app.use('/api/v1/application',applicationRoute)



app.listen(process.env.PORT || 3000,() => {
    connectDB()
    console.log("Server is running");
    
})