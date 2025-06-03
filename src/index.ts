import "express-async-errors"; // Permet de catcher automatiquement les erreurs async
import { app } from "./app";
import { createHttpServer } from "http";
import { initTemporal } from "@config/temporal";
import { connectDatabase } from "@config/database";

const port = process.env.PORT || 4000;

async function startServer() {
  try {
    // 1. Connexion à la base (Drizzle + Postgres)
    await connectDatabase();

    // 2. Initialisation Temporal (client + worker)
    await initTemporal();

    // 3. Démarrage du serveur HTTP
    const server = createHttpServer(app);
    server.listen(port, () => {
      console.log(`🚀 Serveur démarré sur le port ${port}`);
    });
  } catch (error) {
    console.error("Erreur durant le démarrage du serveur :", error);
    process.exit(1);
  }
}

startServer();
