import { Router } from "express";
import { registerUser,
        loginUser,
        logOut,
        listOfSideBar } from "../controllers/user.controllers.js";      
const router = Router()


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route( "/logout" ).get(logOut)
router.route("/listacc").get(listOfSideBar)


export default router