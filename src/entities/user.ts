import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp,
    integer
  } from "drizzle-orm/pg-core";
  import { roles } from "./role";
  
  export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password_hash: text("password_hash").notNull(),
    full_name: varchar("full_name", { length: 255 }).notNull(),
    role_id: integer("role_id")
      .notNull()
      .references(() => roles.id),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at")
      .defaultNow()
      .notNull()
  });
  