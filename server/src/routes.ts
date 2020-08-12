import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const classController = new ClassesController();
const connectionsController = new ConnectionsController();
const routes = express.Router();

routes.get("/", (req, res) => res.json({ message: "ok" }));

routes.post("/classes", classController.create);
routes.get("/classes", classController.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);
export default routes;
