import express from "express";
import {addUser,getAll,editUser,deletUser} from "../Controllers/UserControllers.js";

const UserRoutes = express.Router();
UserRoutes.get("/",getAll);
UserRoutes.post("/add",addUser);
UserRoutes.post("/edit/:id",editUser);
UserRoutes.get("/delete/:id",deletUser);

export default UserRoutes;