import requests
from bs4 import BeautifulSoup

# Realizar la solicitud HTTP a la página web
url = input('Ingresa el URL: ')
response = requests.get(url)

# Analizar el contenido HTML de la página web
soup = BeautifulSoup(response.text, 'html.parser')

# Extraer los datos deseados
enlaces = soup.find_all('a')

# Imprimir los enlaces encontrados
for enlace in enlaces:
    print(enlace.get('href'))
