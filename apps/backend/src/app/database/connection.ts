import { Pool } from 'pg'
import { PostgresDialect } from 'kysely'

export const connection = new PostgresDialect({
    pool: new Pool({
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_SERVER,
      user: process.env.DATABASE_USER,
      port: Number(process.env.DATABASE_PORT),
      max: 128,
      ssl: process.env.DATABASE_SSL === "true"
    })
  })
