export const fetchPopularMovies = async () => {
  return [
    // English Movies
    {
      id: 1,
      title: "Avengers: Endgame",
      release_date: "2019-04-26",
      vote_average: 8.4,
      poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins.",
      genres: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      vote_average: 9.0,
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      overview: "Batman faces the Joker who terrorizes Gotham City.",
      genres: ["Action", "Crime", "Drama"],
    },
    {
      id: 3,
      title: "Inception",
      release_date: "2010-07-16",
      vote_average: 8.8,
      poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      overview: "A thief who steals corporate secrets through dream-sharing technology.",
      genres: ["Action", "Sci-Fi", "Thriller"],
    },

    // Hindi Movies
    {
      id: 4,
      title: "3 Idiots",
      release_date: "2009-12-25",
      vote_average: 8.4,
      poster_path: "https://m.media-amazon.com/images/I/61sZGNr75iL._SL1000_.jpg",
      overview: "Three engineering students navigate college life and societal pressures.",
      genres: ["Comedy", "Drama"],
    },
    {
      id: 5,
      title: "Dangal",
      release_date: "2016-12-23",
      vote_average: 8.4,
      poster_path: "https://wallpaperaccess.com/full/7113859.jpg",
      overview: "A father trains his daughters to become world-class wrestlers.",
      genres: ["Biography", "Drama", "Sport"],
    },
    {
      id: 6,
      title: "Bahubali: The Beginning",
      release_date: "2015-07-10",
      vote_average: 8.0,
      poster_path: "https://wallpaperbat.com/img/1695845-baahubali-the-beginning-2015.jpg",
      overview: "A young man learns about his royal heritage and destiny.",
      genres: ["Action", "Drama", "Fantasy"],
    },

    // Telugu Movies
    {
      id: 7,
      title: "RRR",
      release_date: "2022-03-25",
      vote_average: 8.2,
      poster_path: "https://stat4.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
      overview: "Epic action drama set in the 1920s about freedom fighters.",
      genres: ["Action", "Drama", "History"],
    },
    {
      id: 8,
      title: "Pushpa: The Rise",
      release_date: "2021-12-17",
      vote_average: 8.1,
      poster_path: "https://www.kerala9.com/wp-content/uploads/2021/12/pushpa-movie-hd-poster-001.jpg",
      overview: "A red sandalwood smuggler rises through the ranks in the mafia world.",
      genres: ["Action", "Thriller"],
    },
    {
      id: 9,
      title: "Sye Raa Narasimha Reddy",
      release_date: "2019-10-02",
      vote_average: 7.8,
      poster_path: "https://assets.gadgets360cdn.com/pricee/assets/product/202205/Sye-Raa-Narasimha-Reddy-poster_1652806496.jpg",
      overview: "The story of an Indian freedom fighter who challenged British rule.",
      genres: ["Action", "Drama", "History"],
    },

    // More Popular
    {
      id: 10,
      title: "Spider-Man: No Way Home",
      release_date: "2021-12-17",
      vote_average: 8.3,
      poster_path: "https://i.ebayimg.com/images/g/FQUAAOSwt9JgOARA/s-l1600.jpg",
      overview: "Peter Parker's secret identity is revealed, threatening his life.",
      genres: ["Action", "Adventure", "Sci-Fi"],
    },
    {
      id: 11,
      title: "KGF: Chapter 2",
      release_date: "2022-04-14",
      vote_average: 8.2,
      poster_path: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a52b5490524441.5e198518e7e18.png",
      overview: "Rocky rises to power in the Kolar Gold Fields and faces enemies.",
      genres: ["Action", "Drama", "Thriller"],
    },
    {
      id: 12,
      title: "Ala Vaikunthapurramuloo",
      release_date: "2020-01-12",
      vote_average: 8.0,
      poster_path: "https://wallpaperaccess.com/full/2389135.jpg",
      overview: "A man discovers the truth about his birth and family secrets.",
      genres: ["Action", "Drama", "Comedy"],
    }
  ];
};

export const searchMovies = async (query) => {
  const movies = await fetchPopularMovies();
  return movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));
};

export const getMovieDetails = async (id) => {
  const movies = await fetchPopularMovies();
  return movies.find((m) => m.id === id);
};
