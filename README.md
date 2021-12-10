# 🔧 ERN template

Template for websites built with:
 - Express & Node back end
 - React front end 
 
 The main branch uses Postgres as the database engine. Another branch will be created for MongoDB database.


## Setting up the database

After creating a Postgres database, in PSQL run: 

1. `\i server/db/schema.sql`
2. `\i server/db/seeds.sql`

To reset the database subsequently, run in the node terminal: `npm run reset-db`

## Features

- home page
- login & logout
- posts page (visible to all users, but only logged in users can post)


