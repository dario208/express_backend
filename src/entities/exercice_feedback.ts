import {
    pgTable,
    serial,
    integer,
    text,
    timestamp
  } from "drizzle-orm/pg-core";
  import { users } from "./user";
  import { exercises } from "./exercise";
  
  export const exerciseFeedback = pgTable("exercise_feedback", {
    id: serial("id").primaryKey(),
    student_id: integer("student_id")
      .notNull()
      .references(() => users.id)
      .onDelete("cascade"),
    exercise_id: integer("exercise_id")
      .notNull()
      .references(() => exercises.id)
      .onDelete("cascade"),
    is_correct: boolean("is_correct").notNull(),
    user_answer: text("user_answer").notNull(),
    feedback_text: text("feedback_text"),
    created_at: timestamp("created_at").defaultNow().notNull()
  });
  