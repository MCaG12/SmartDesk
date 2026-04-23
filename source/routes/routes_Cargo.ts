import { Router, Request , Response } from "express";

import {CargoController} from "../controllers/controller_Cargo"

const ConstCargoController = new CargoController()


const imageRouter = Router();

imageRouter.get('/GetImages', ImageController.getImages)

imageRouter.post('/GetImage', ImageController.getImage)

imageRouter.post('/GetImageQuestionId', ImageController.getImageByQuestionId)

export default imageRouter;