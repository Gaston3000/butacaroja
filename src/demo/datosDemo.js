// Datos de ejemplo para poder probar la app sin haber cargado la API key todavia.
// Cuando pongas tu clave en el .env, la app usa la API real de TMDB y esto no se usa.
// Los poster_path son reales (las imagenes de TMDB no necesitan key).

export const peliculasDemo = [
  {
    id: 550,
    title: 'El club de la pelea',
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    overview:
      'Un oficinista insomne y hastiado de su vida arma, junto a un carismatico vendedor de jabon, un club de peleas clandestino que termina convirtiendose en algo mucho mas grande.',
    tagline: 'Rompelo todo.',
    vote_average: 8.4,
    release_date: '1999-10-15',
    genre_ids: [18],
    genres: [{ id: 18, name: 'Drama' }],
  },
  {
    id: 155,
    title: 'Batman: El caballero de la noche',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    overview:
      'Batman se enfrenta al Guason, un criminal que sume a Ciudad Gotica en el caos y pone a prueba hasta donde esta dispuesto a llegar el heroe.',
    tagline: 'Bienvenido a un mundo sin reglas.',
    vote_average: 8.5,
    release_date: '2008-07-16',
    genre_ids: [28, 80, 18, 53],
    genres: [
      { id: 28, name: 'Accion' },
      { id: 80, name: 'Crimen' },
      { id: 18, name: 'Drama' },
      { id: 53, name: 'Suspenso' },
    ],
  },
  {
    id: 27205,
    title: 'El origen',
    poster_path: '/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    overview:
      'Un ladron capaz de robar secretos del subconsciente durante el sueno recibe la mision inversa: implantar una idea en la mente de un empresario.',
    tagline: 'Tu mente es la escena del crimen.',
    vote_average: 8.4,
    release_date: '2010-07-15',
    genre_ids: [28, 878, 12],
    genres: [
      { id: 28, name: 'Accion' },
      { id: 878, name: 'Ciencia ficcion' },
      { id: 12, name: 'Aventura' },
    ],
  },
  {
    id: 157336,
    title: 'Interestelar',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    overview:
      'Con la Tierra al borde del colapso, un grupo de exploradores viaja a traves de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    tagline: 'La humanidad nacio en la Tierra, pero no estaba destinada a morir aca.',
    vote_average: 8.4,
    release_date: '2014-11-05',
    genre_ids: [12, 18, 878],
    genres: [
      { id: 12, name: 'Aventura' },
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Ciencia ficcion' },
    ],
  },
  {
    id: 680,
    title: 'Tiempos violentos',
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    overview:
      'Las vidas de dos sicarios, un boxeador y la esposa de un mafioso se entrelazan en cuatro historias de violencia, humor negro y redencion.',
    tagline: 'Viví un pedazo de la vida de un gangster.',
    vote_average: 8.5,
    release_date: '1994-09-10',
    genre_ids: [80, 18, 53],
    genres: [
      { id: 80, name: 'Crimen' },
      { id: 18, name: 'Drama' },
      { id: 53, name: 'Suspenso' },
    ],
  },
  {
    id: 603,
    title: 'Matrix',
    poster_path: '/p96dm7sCMn4VYAStA6siNz30G1r.jpg',
    overview:
      'Un programador descubre que la realidad que conoce es una simulacion creada por maquinas y se une a la rebelion para liberar a la humanidad.',
    tagline: 'Bienvenido al mundo real.',
    vote_average: 8.2,
    release_date: '1999-03-31',
    genre_ids: [28, 878],
    genres: [
      { id: 28, name: 'Accion' },
      { id: 878, name: 'Ciencia ficcion' },
    ],
  },
  {
    id: 13,
    title: 'Forrest Gump',
    poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    overview:
      'Desde su mirada simple y bondadosa, Forrest Gump es testigo y protagonista de varias decadas de la historia de Estados Unidos.',
    tagline: 'La vida es como una caja de bombones.',
    vote_average: 8.5,
    release_date: '1994-07-06',
    genre_ids: [35, 18, 10749],
    genres: [
      { id: 35, name: 'Comedia' },
      { id: 18, name: 'Drama' },
      { id: 10749, name: 'Romance' },
    ],
  },
  {
    id: 496243,
    title: 'Parasitos',
    poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    overview:
      'Una familia pobre se va infiltrando de a poco en el hogar de una familia adinerada, hasta que un hecho inesperado lo cambia todo.',
    tagline: 'Actua como si fueras de la familia.',
    vote_average: 8.5,
    release_date: '2019-05-30',
    genre_ids: [35, 53, 18],
    genres: [
      { id: 35, name: 'Comedia' },
      { id: 53, name: 'Suspenso' },
      { id: 18, name: 'Drama' },
    ],
  },
  {
    id: 238,
    title: 'El Padrino',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    overview:
      'El patriarca de una poderosa familia mafiosa traspasa el control de su imperio a su reticente hijo menor.',
    tagline: 'Una oferta que no vas a poder rechazar.',
    vote_average: 8.7,
    release_date: '1972-03-14',
    genre_ids: [18, 80],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crimen' },
    ],
  },
  {
    id: 278,
    title: 'Sueno de fuga',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    overview:
      'Condenado por un crimen que no cometio, un banquero entabla una profunda amistad en prision mientras nunca pierde la esperanza de ser libre.',
    tagline: 'El miedo te encadena, la esperanza te libera.',
    vote_average: 8.7,
    release_date: '1994-09-23',
    genre_ids: [18, 80],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crimen' },
    ],
  },
]

// Lista de generos para el filtro cuando estamos en modo demo
export const generosDemo = [
  { id: 28, name: 'Accion' },
  { id: 12, name: 'Aventura' },
  { id: 35, name: 'Comedia' },
  { id: 80, name: 'Crimen' },
  { id: 18, name: 'Drama' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Ciencia ficcion' },
  { id: 53, name: 'Suspenso' },
]
