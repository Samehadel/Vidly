const movies = [
    {
        _id: 1,
        title: 'Spider Man',
        genre: 'Action',
        stock: 4,
        liked: false,
        rating: 2.6
    },
    {
        _id: 2,
        title: 'The Furry',
        genre: 'Action',
        stock: 3,
        liked: false,
        rating: 8.6
    },
    {
        _id: 3,
        title: 'The Hunger Games',
        genre: 'Adventure',
        stock: 3,
        liked: false,
        rating: 8.6
    },
    {
        _id: 4,
        title: 'War Dogs',
        genre: 'Action',
        stock: 3,
        liked: true,
        rating: 7.6
    },
    {
        _id: 5,
        title: 'The Fault In Our Starts',
        genre: 'Romantic',
        stock: 2,
        liked: true,
        rating: 8.0
    },
    {
        _id: 6,
        title: '1917',
        genre: 'War',
        stock: 3,
        liked: true,
        rating: 7.6
    },
    {
        _id: 7,
        title: 'About Time',
        genre: 'Drama',
        stock: 2,
        liked: false,
        rating: 7.0
    },
    {
        _id: 8,
        title: 'I Origins',
        genre: 'Inspirational',
        stock: 3,
        liked: true,
        rating: 7.6
    },
    {
        _id: 9,
        title: 'Her',
        genre: 'Drama',
        stock: 2,
        liked: true,
        rating: 8.0
    },
    {
        _id: 10,
        title: 'Forrest Jump',
        genre: 'Drama',
        stock: 2,
        liked: true,
        rating: 9.0
    },
    {
        _id: 11,
        title: 'Hangover',
        genre: 'Comedy',
        stock: 3,
        liked: true,
        rating: 8.3
    },
    {
        _id: 12,
        title: '3 Idiots',
        genre: 'Drama',
        stock: 2,
        liked: true,
        rating: 8.0
    }

]

export function searchMovieById(id) {
    const movie = movies.find(m => m._id == id)
    

    return movie ? movie : null;
};
export function getMovies(){
    return movies;
}

export function getGenre() {
    const genres = [
        {
            name: 'All Genre',
            id: 1
        },
        {
            name: 'Action',
            id: 2
        },
        {
            name: 'Drama',
            id: 3
        },
        {
            name: 'Comedy',
            id: 4
        },
        {
            name: 'Inspirational',
            id: 5
        },
        {
            name: 'War',
            id: 6
        },
        {
            name: 'Adventure',
            id: 7
        },
        {
            name: 'Romantic',
            id: 8
        }
    ]
    return genres;
}