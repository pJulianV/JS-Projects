import requests

# Solicitar la API key al usuario
api_key = input("Ingresa tu API key de TheMovieDB: ")

# URL de la API para obtener las películas populares
url = f"https://api.themoviedb.org/3/movie/popular?api_key={api_key}"

# Realizar la solicitud HTTP a la API
response = requests.get(url)

# Verificar el estado de la respuesta
if response.status_code == 200:
    # Obtener los datos de las películas
    data = response.json()
    results = data['results']

    # Obtener las 10 primeras películas y su rating
    peliculas = []
    for pelicula in results[:10]:
        titulo = pelicula['title']
        rating = pelicula['vote_average']
        peliculas.append({'titulo': titulo, 'rating': rating})

    # Imprimir la lista de películas y su rating
    for pelicula in peliculas:
        print(f"Película: {pelicula['titulo']}")
        print(f"Rating: {pelicula['rating']}")
        print("------------------------")
else:
    print("Error al realizar la solicitud a la API.")
