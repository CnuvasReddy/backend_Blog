import express from "express";
import mongoose from "mongoose"
import router from "./routes/user-routes";
import blogRoute from "./routes/blog-routes";


const app= express();

app.use(express.json())
app.use("/api/user", router);
app.use("/api/blog", blogRoute);


mongoose.connect('mongodb+srv://srinivasreddy:T25fcCWq5bCrLUBI@cluster0.5t7u1ue.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=>app.listen(4000))
.then(()=>
    console.log("connected To Database and Listen Port 4000"))
.catch((err)=>console.log(err));
