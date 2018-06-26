const express = require('express')
const fs = require('fs')
const https = require('https')
const forceSsl = require('express-force-ssl')

const key = fs.readFileSync('encryption/private.key')
const cert = fs.readFileSync('encryption/server.crt')

const app = express()
app.use(forceSsl)

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send('Hello World!'))



const options = {
  key: key,
  cert: cert
}

const server = https.createServer(options, app)

server.listen(3000, () => console.log('Secure server listening on port 3000.'))
