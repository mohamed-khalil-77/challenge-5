import express from "express";
import http from "http";
import bodyParser from "body-parser";
import UserRoutes from "./Routes/UserRoutes.js";
import ProductRoutes from "./Routes/ProductRoutes.js"
const PORT=3000;


const app= express();
http.createServer(app);
app.use(bodyParser.json());

app.use("/users/", UserRoutes);
app.use("/product/",ProductRoutes);

app.listen(PORT,()=>{
    console.log(`app live on port ${PORT}`);
});