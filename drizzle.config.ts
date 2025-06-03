import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  driver: "pg",
  schema: "./src/entities",      // Où se trouvent vos fichiers de schéma Drizzle
  out: "./drizzle",             // Répertoire de sortie des migrations générées
  dbCredentials: {
    connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}` +
                      `@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
  }
});
