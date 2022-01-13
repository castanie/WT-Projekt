const express = require('express')
const compression = require('compression')
const pg = require('pg')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(compression());

const pool = new pg.Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/menuCategories', (req, res) => {
  res.send('Categories.')
})

app.get('/menuItems', (req, res) => {
  res.send('Items.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})