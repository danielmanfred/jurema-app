import bodyParser from 'body-parser'

import app from './app'
import key from './config/keys'

// Settings
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Main routes
require('./routes/states')(app)
require('./routes/population')(app)

// Routing the home endpoint
app.get('/', (req, res) => res.json({ message: 'Welcome to the Jurema Exam' }))

// Running app
app.listen(key.server.port, () => console.log('Server running at port 3000'))
