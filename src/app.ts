import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "@config/swagger";
import routes from "./routes";
import { errorMiddleware } from "@middlewares/error.middleware";

dotenv.config();

export const app: Application = express();

// Middlewares globaux
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Documentation Swagger (route /docs)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes de l’API
app.use("/api", routes);

// Route par défaut
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Backend éducatif opérationnel" });
});

// Gestion centralisée des erreurs
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return errorMiddleware(err, req, res, next);
});
