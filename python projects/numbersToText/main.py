from num2words import num2words

def numero_a_palabras(numero):
    return num2words(numero, lang='es')

# Ejemplo de uso
numero = int(input('Ingrese un número: '))
resultado = numero_a_palabras(numero)
print(resultado)
