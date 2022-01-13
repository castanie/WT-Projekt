const express = require('express')
const path = require('path')
const compression = require('compression')
const pg = require('pg')

const app = express()
const port = 3000

app.use(express.static('./public/dist/app'))
app.use(compression());

const pool = new pg.Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/dist/app/index.html'))
})

app.get('/menu/categories', (req, res) => {
  pool.query('SELECT * FROM menu_categories').then((data) => {
    res.status(200).send(data.rows)
  })
})

app.get('/menu/categories/:category', (req, res) => {
  pool.query('SELECT * FROM menu_items WHERE category = $1', [ req.params.category ]).then((data) => {
    res.status(200).send(data.rows)
  })
})

app.post('/order', (req, res) => {
  // res.send('Payment redirection...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})