const express = require('express')
const app = express()
const PORT = 7000
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas')
const cors = require('cors')

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
