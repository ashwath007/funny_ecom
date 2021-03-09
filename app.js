const fastify = require('fastify')({ logger: true })
const { saveGrocery } = require('./controllers/grocery');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/funny', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Ready")
    }).catch((err) => {
        console.log(err)
    })



fastify.post("/save", saveGrocery)

fastify.get('/', async(request, reply) => {
    return { here: 'I am vicky' }
})









// Run the server!
const start = async() => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()