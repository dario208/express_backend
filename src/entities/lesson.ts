import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp,
    integer
  } from "drizzle-orm/pg-core";
  import { modules } from "./module";
  
  export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    module_id: integer("module_id")
      .notNull()
      .references(() => modules.id)
      .onDelete("cascade"),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content"), // texte riche ou JSON, selon besoin
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
  });
  