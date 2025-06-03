import {
    pgTable,
    serial,
    integer,
    varchar,
    timestamp,
    boolean
  } from "drizzle-orm/pg-core";
  import { users } from "./user";
  import { lessons } from "./lesson";
  import { exercises } from "./exercise";
  
  // On enregistre la progression d’un élève sur une leçon ou un exercice
  export const studentProgress = pgTable("student_progress", {
    id: serial("id").primaryKey(),
    student_id: integer("student_id")
      .notNull()
      .references(() => users.id)
      .onDelete("cascade"),
    lesson_id: integer("lesson_id")
      .references(() => lessons.id)
      .onDelete("cascade"),
    exercise_id: integer("exercise_id")
      .references(() => exercises.id)
      .onDelete("cascade"),
    is_completed: boolean("is_completed").notNull().default(false),
    score: integer("score"), // facultatif
    // Date de dernière activité
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
  });
  