import {
    pgTable,
    serial,
    varchar,
    text,
    integer,
    boolean,
    timestamp
  } from "drizzle-orm/pg-core";
  import { lessons } from "./lesson";
  
  export const exercises = pgTable("exercises", {
    id: serial("id").primaryKey(),
    lesson_id: integer("lesson_id")
      .notNull()
      .references(() => lessons.id)
      .onDelete("cascade"),
    question: text("question").notNull(),
    // Supposons une liste JSON d'options si QCM, ou texte libre
    options: text("options"), 
    correct_answer: text("correct_answer").notNull(),
    // Si plusieurs types d’exo (QCM, texte libre…), on peut ajouter un champ "type"
    type: varchar("type", { length: 50 }).notNull().default("MCQ"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
  });
  