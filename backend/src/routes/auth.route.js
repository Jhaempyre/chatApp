import { Router } from "express";
import { registerUser,
        loginUser,
    logOut } from "../controllers/user.controllers";      
const router = Router()


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route( "/logout" ).get(logOut)


export default router