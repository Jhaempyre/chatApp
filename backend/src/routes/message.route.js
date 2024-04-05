import { Router } from "express";
import { sendMesage,
        getMessage } from "../controllers/message.controllers";
import verifyJwt from "../middlewares/auth.middleware.js"        
const router = Router()

router.route("/:id").get(verifyJwt ,getMessage)  // Get a message by its id with the user's token

// @desc      Send a new message
// @route     POST /api/v1/messages
// @access    Private
router
    .route("/send/:id")
    .post(verifyJwt ,sendMesage)   // Add a new message  with the user's token

    export default router;    