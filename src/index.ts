import express from 'express'

const app = express()

app.get('/', async(req, resp) => {
    resp.json({message: 'hello world'})
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Running')
})