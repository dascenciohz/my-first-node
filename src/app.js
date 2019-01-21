const path = require('path');
const express = require('express'); 
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Connection to MongoDB
mongoose.connect('mongodb://statuspage:qwe123@localhost:27017/statuspage', {useNewUrlParser: true })
  .then(db => console.log('Database Connected.'))
  .catch(err => console.log(err))

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // EJS es un motor de plantillas.

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // Nos ayuda a entender los datos que nos envía un formulario.

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/domain'));

// Start express server
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`)
});
