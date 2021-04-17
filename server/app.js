const express = require('express')

// EXPRESS APP
const app = express()

// CONSTANTS
const PORT = process.env.PORT || 5000

// HOME ROUTE
app.get('/', (req, res) => {
    res.status(200).send({message : 'Node Is Here!'})
})

// SPINNING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})