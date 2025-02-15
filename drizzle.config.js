import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_NTCe4RO8nyFw@ep-broad-hill-a80p7za3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  }
});
