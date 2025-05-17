# 51958
Proyecto analizador de Sintaxis y Semantica de los lenguajes hecho por el alumno Kevin Diaz
# Requisitos:
Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Git:** Para clonar el repositorio. [Descarga Git](https://git-scm.com/)
- **Node.js:** Para ejecutar la aplicación. [Descarga Node.js](https://nodejs.org/)
- **Java:** Necesario para compilar la gramática con ANTLR. [Descarga Java](https://www.oracle.com/java/technologies/javase-downloads.html)
- **ANTLR4:** Descarga el archivo JAR desde [ANTLR](https://www.antlr.org/download.html)

> **Nota:** Además, instala la librería ANTLR para Node.js ejecutando en la terminal:
> 
> ```bash
> npm install antlr4
# Clonar el repositorio:
1. Abre una terminal o consola de comandos (cmd).
2. Ubícate en la carpeta donde quieras tener el proyecto.
3. Ejecuta el siguiente comando para clonar el repositorio:
> ```bash
> https://github.com/kevin7706/51958.git
5. Una vez clonado, entra en la carpeta del proyecto
> ```bash
> cd 51958
7. # Abrir el Proyecto en tu Editor
Abre VS Code para trabajar con el código del proyecto. Para esto ejecuta en la ventana
de comandos abierta
> ```bash
> code .
Si todo esta correcto ya deberias ver el proyecto en VS Code
11. # Abrir archivo kdgramatica.g4
Al abrirlo deberias ver la gramatica del caso
# Ejecutar la aplicacion:
Para ejecutarlo 
>```bash
> node main.js
El programa analizará los archivos de entrada (por ejemplo, los casos correctos definidos como input_correct1.txt e input_correct2.txt) y realizará lo siguiente:

Imprimirá en la terminal la tabla de lexemas y tokens.![image](https://github.com/user-attachments/assets/fa4a322f-7e5b-4b9c-ab0b-9ae043971c68)


Mostrará el árbol de análisis sintáctico.![image](https://github.com/user-attachments/assets/8edcc411-5ec6-497f-97a3-ee91ebe98823)


Traducirá el árbol a código JavaScript y lo ejecutará (usando eval() en un entorno controlado).![image](https://github.com/user-attachments/assets/bdd6e3f0-f3f5-4ae0-8b61-344e0964fae8)

# Para dibujar el arbol
Al pulsar F5 en el archivo kdgramatica.g4 genera el arbol ![image](https://github.com/user-attachments/assets/f7738230-66df-4f4d-8adf-0af8b122bee9)
