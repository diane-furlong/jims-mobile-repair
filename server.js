const express = require('express')
const path = require('path')
const app = express()

app.set('trust proxy', 1);
app.use(express.static('client/build'));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))