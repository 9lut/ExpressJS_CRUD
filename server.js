const express = require('express')
const app = express()

// เรียกใช้
const { readdirSync } = require('fs')

// Routes Test
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routes
readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/' + r)))

const  port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})