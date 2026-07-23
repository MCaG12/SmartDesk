import "dotenv/config"; 
import "reflect-metadata";           
import express from "express";
import { AppDataSource } from "./data-source";
import CargoRouter from "./routes/routes_Cargo";
import DepartamentoRouter from "./routes/routes_Departamento";
import TicketCategoryRouter from "./routes/routes_TicketCategory";
import TicketRouter from "./routes/routes_Ticket";
import TicketCommentRouter from "./routes/routes_TicketComment";
import TicketStatusRouter from "./routes/routes_TicketStatus";
import TipoUsuarioRouter from "./routes/routes_TipoUsuario";
import TypePriorityRouter from "./routes/routes_TypePriority";
import UserRouter from "./routes/routes_Usuario";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected.");
    app.use("/Cargo", CargoRouter);
    app.use("/Departamento", DepartamentoRouter);
    app.use("/Ticket", TicketRouter);
    app.use("/TicketCategory", TicketCategoryRouter);
    app.use("/TicketComment", TicketCommentRouter);
    app.use("/TicketStatus", TicketStatusRouter);
    app.use("/TipoUsuario", TipoUsuarioRouter);
    app.use("/TypePriority", TypePriorityRouter);
    app.use("/Usuario", UserRouter);
    app.listen(3000, () => console.log("Server running on port 3000"));
    
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });
