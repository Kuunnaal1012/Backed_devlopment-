import express from 'express'
import cors from 'cors' // front-end aur backed ki url link karne ke liye use karte hai issko 
import cookieParser from 'cookie-parser'  /// user ke browser mein data data access aur install karne liye 
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, // ek front ki link jaah se data aayega
    credential: true,
}))
//middleware 
app.use(express.json({limit:"16kb"})) // data ki max limit set kari hai json format mein 
app.use(express.urlencoded({extended:true, limit:"16kb"}))  // url ke liye use karte hai jab encoded form mein rehti hai 
app.use(express.static("public"))  // public folder , static file access karega 
app.use(cookieParser())  /// user ke browser mein cookies store aur access karne ke liye 




import userRouter from './routes/user.routes.js'


// routes declaration 

app.use("/api/v1/user", userRouter)


export {app}


                                        /*  charcha on middile-ware 

1)  when  client hits  url 
    (req, res)=>{
        then(
        resolve wala part          // to create a check point for a condition before getting data to user            
        )                             just like , insta account check karne se pehele woh login karne ke liye check karta hai
        catch()                       /// it can be more then one 
}                              like 
                              login hai toh two factor hai fir usska pop up lagega 


*/
