import express, { request, response } from "express";
import { PORT ,mongDBURl } from "./config.js";
import mongoose from "mongoose";
import booksroute from "./routes/bookroutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

//Type1:all
app.use(cors());

//Type2:custom
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }));


app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send("Worked");
});

app.use("/books",booksroute);

mongoose.connect(mongDBURl).then(() => {
    console.log("Connect Success!");
    app.listen(PORT,() => {
        console.log(`Working: ${PORT}`);
    });

}).catch((error) => {
    console.log(error);
})