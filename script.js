var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: './img/harry_potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: './img/lion_king.jpg'
    },
    {
        id: 3,
        title: 'Szklana pułapka',
        desc: 'Film sensacyjny',
        poster: './img/die_hard.jpg'
    },
    {
        id: 4,
        title: 'Koszmar z ulicy Wiązów',
        desc: 'Horror',
        poster: './img/nightmare.jpg'
    },
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
