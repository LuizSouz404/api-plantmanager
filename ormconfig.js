console.log('process.env.databaseURL :>>', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": ["./build/database/migrations/**.js"],
  "entities": ["./build/models/**.js"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}