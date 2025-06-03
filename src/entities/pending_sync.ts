import {
    pgTable,
    serial,
    integer,
    text,
    timestamp,
    boolean
  } from "drizzle-orm/pg-core";
  import { users } from "./user";
  
  // Table servant de « queue » pour les opérations hors-ligne
  export const pendingSync = pgTable("pending_sync", {
    id: serial("id").primaryKey(),
    student_id: integer("student_id")
      .notNull()
      .references(() => users.id)
      .onDelete("cascade"),
    payload: text("payload").notNull(), 
    // payload = JSON.stringify({ endpoint: '/lesson/complete', data: { ... } })
    processed: boolean("processed").notNull().default(false),
    created_at: timestamp("created_at").defaultNow().notNull(),
    processed_at: timestamp("processed_at")
  });
  