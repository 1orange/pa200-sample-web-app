# Simple Postgres WebApp

## Setup
1. Install dependencies: `npm install`
2. Set up PostgreSQL database and create a `users` table:
```bash
psql -h localhost -p 5432 -U username -d dbname -f db/db.sql
```
3. Add your DB credentials to `.env`
4. Start the server: `npm start`
5. Open `http://localhost:3000` in your browser
