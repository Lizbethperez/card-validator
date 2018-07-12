# Valida datos de tarjetas de crédito

* **Integrantes de equipo** _Lizbeth Pérez. Karla Martínez_ 
* **Curso:** _JS DEEP DIVE: CREA TU PROPIA LIBRERÍA USANDO JAVASCRIPT_
* **Unidad:** _Producto final_

## ¿Cómo funciona?

**Nuestro producto final debe validar:**

* El nombre del usuario.
* Que el número de la tarjeta tenga solo 16 dígitos, no acepte letras y no acepte espacios ni caracteres especiales.
* Una vez corroborado lo anterior, se verifica a través del algoritmo de Luhn que el número de tarjeta ingresado sea válido.
* La fecha de expiración de la tarjeta de crédito en donde en la primer casilla de verificación solo acepte 2 dígitos del *"01"* al *"12"* y en la segunda casilla que no acepte letras, cáracteres especiales ni espacios.
* Que el código de verificación acepte solo tres dígitos, y que no acepte letras, cáracteres especiales ni espacios.
* Si todas las validaciones son correctas aparecerá en el navegador el mensaje *"Tarjeta válida"* y se podrá hacer click en *pagar*.

*** 

# Instrucciones para Usuario.

El usuario debera ingresar:

* `Nombre de titular de tarjeta`
* `Número de tarjeta` _Que contenga sólo 16 dígitos_
* `Fecha de vencimiento` _Mes y año_
* `Código de seguridad` _De tres dígitos_
* `Click en botón "pagar"` _Para realizar la transacción_

***

# Instrucciones para uso de la librería.

AQUI DEBE HABER ALGO DE LAS LIBRERIAS Y ASI

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta


*** 

# Introducción.

Casi todos alguna vez hemos utilizado alguna tarjeta de crédito para realizar una compra. 

![compra-tarjeta](/assets/image/tarjetas2.jpg)

Como sabes, estas tarjetas cuentan con ciertas numeraciones tales como el nombre del titular de la tarjeta (persona autorizada para dar uso de ella), la numeración principal que cuenta con 16 dígitos, la fecha de expiración contando con el mes y el año y un código de seguridad.
En este reto crearemos un “validador de tarjetas de crédito” que ayudara a las empresas en linea a aceptar el pago de sus productos o servicios a través de este sistema.

# Investigación.

¿Cuál es el método de validación de una Tarjeta de Crédito?

![validator](/assets/image/validator.gif)

La mayoría de las tarjetas de crédito se validan mediante el algoritmo de Luhn.

## Algoritmo de Luhn.

El algoritmo de Luhn o fórmula de Luhn, también conocida como "algoritmo de módulo 10", es una fórmula de suma de verificación, utilizada para validar una diversidad de números de identificación; como números de tarjetas de crédito, números IMEI, etc.
Este algoritmo fue creado por el científico de IBM llamado Hans Peter Luhn y descrito en la patente U.S. Patent No. 2,950,048, solicitada el 6 de enero de 1954, y concedida el 23 de agosto de 1960.

Este algoritmo es de dominio público y es ampliamente usado en la actualidad. Su especificación está contenida en la norma ISO/IEC 7812-1.1​ Su propósito no es de ser una función hash criptográfica segura contra ataques maliciosos, sino que fue diseñada para protección contra errores accidentales. La gran mayoría de tarjetas de crédito y otros números de identificación usan este algoritmo como un método simple de distinguir números válidos a partir de una entrada de números al azar.

## Como funciona el Algoritmo de Luhn. (Explicación informal).

La fórmula verifica un número contra su dígito de chequeo incluido, el cual el usualmente agregado a un número de cuenta parcial para generar el número de cuenta completo. Este número de cuenta debe pasar la siguiente prueba:
1. A partir del dígito de chequeo incluido, el cual está a la derecha de todo el número, ir de derecha a izquierda duplicando cada segundo dígito.
2. Sumar los dígitos del resultado: (ejemplo: 10 = 1 + 0 = 1, 14 = 1 + 4 = 5) juntos con los dígitos sin duplicar del número original.
3. Si el total de módulo 10 es igual a 0 (si el total termina en cero), entonces el número es válido de acuerdo con la fórmula Luhn, de lo contrario no es válido.
Supongamos un ejemplo de un número de cuenta "7992739871", que contará con un dígito de control adicional, por lo que es de la forma 7992739871x:

![algoritmo-luhn](/assets/image/luhn.jpg)

El dígito de chequeo (x) se obtiene entonces de (67 * 9 mod 10). En términos sencillos:

Calcular la suma de los dígitos (67).
Multiplicar por 9 (603).
Tomar el último dígito (3).
El resultado es el dígito de chequeo.
(Método alternativo) El dígito de chequeo (x) se obtiene de (67 => dígito de las unidades: 7; 10 - 7 = dígito de chequeo: 3). En términos sencillo:

Calcular la suma de los dígitos (67).
Tomar el dígito de las unidades 7.
Restar el dígito de las unidades del módulo 10.
El resultado es 3.
El resultado es el dígito de chequeo.
Entonces, el número de cuenta completo es 79927398713.


## ¿Qué procede?

Una vez comprobado el dígito de validación por medio del algoritmo y definida como una Tarjeta de Crédito Valida, se procede a separar los componentes del número de tarjeta de la siguiente manera:

Los primeros seis dígitos de la tarjeta corresponden al Bin bancario. (estos son definidos por instituciones las cuales llevan un control de los Bines bancarios) ya que el número  correspondiente al BIN también se separa y define varios aspectos, normalmente si el BIN empieza con 4 es una tarjeta tipo VISA, 5 es Mastercard, 6 es de tipo Discovery y así sucesivamente, los siguientes 5 dígitos del BIN determinan la entidad bancaria y país de origen.

Los siguientes dígitos -1, es decir todos los dígitos que siguen al BIN, menos el ultimo dígito, se conoce como numero de cuenta del usuario y esta relacionado directamente con el nombre del tarjeta-habiente, este número es emitido por la institución bancaria que emitió la tarjeta de crédito.

El ultimo dígito, se conoce como dígito de control o dígito de validación, es un número que es sacado mediante el algoritmo antes mencionado, cuya función es detectar errores de captura de datos, ya que si se captura un solo numero erróneo, el algoritmo arrojara un error y se detectara como tarjeta invalida. 

![no-valid-card](/assets/image/novalid.jpeg)

Una tarjeta de crédito, está conformada por los siguientes componentes a parte del Número de Tarjeta: Nombre de la entidad Emisora, Red Nacional, Red Internacional, Chip de Seguridad, Fecha de Caducidad, Nombre del Titular, Firma del titular, CódigoCVV2 o CVC2 o CID y Banda Magnética.

![credit-card](/assets/image/tarjeta-de-credito.jpg)

## DEMO:

AQUI VA EL DEMO 