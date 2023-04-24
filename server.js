import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv" 
import {connectDB} from "./database/db.js"
import UserRouter from "./routes/UserRoute.js"
import TransectionRouter from "./routes/TransectionRoute.js" 
import path, { dirname } from "path"


dotenv.config()
connectDB()

const app = express();  

app.use(morgan("dev"))  
app.use(express.json())    
app.use(cors())

app.use("/api/v1/users" , UserRouter)    
app.use("/api/v1/transection" , TransectionRouter) 
const __dirname = dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname , "./client/build")))
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

const PORT =  process.env.PORT || 8080

app.listen(PORT , () => {   
    console.log(`server start on ${PORT}`)              
})