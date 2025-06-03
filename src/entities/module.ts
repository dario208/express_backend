import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp
  } from "drizzle-orm/pg-core";
  
  export const modules = pgTable("modules", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
  });
  