var express = require('express');

var app = express();

var port = process.env.PORT || 5000; //express listens on this, in prod 80 or 443
var bookRouter = express.Router();

app.use(express.static('public')); //do this before routes
app.set('views', 'src/views');

app.set('view engine', 'ejs');

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Nokolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A Journey to the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    }
    
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
        title: "Books",
        nav: [{
            Link: '/Books',
            Text: 'Books'
                    }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
        books: books
    });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: "Hello from render",
        nav: [{
            Link: '/Books',
            Text: 'Books'
                    }, {
            Link: '/Authors',
            Text: 'Authors'
        }],
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
