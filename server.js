const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'build')))

app.get('*', (_, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 5000

app.listen(port)

console.log(`Server listening on ${port}`)
