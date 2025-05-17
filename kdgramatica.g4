grammar kdgramatica;

// Regla principal
programa : declaraciones EOF ;

// Lista de declaraciones
declaraciones 
    : declaracion
    | declaraciones declaracion
    ;

// Declaración de función
declaracion 
    : tipo IDENTIFICADOR '(' parametros ')' '{' cuerpo '}'
    ;

// Tipos de dato
tipo 
    : 'int'
    | 'float'
    | 'char'
    ;

// Lista de parámetros
parametros 
    : parametro
    | parametros ',' parametro
    ;

// Definición de un parámetro
parametro 
    : tipo IDENTIFICADOR
    ;

// Cuerpo de la función: una o más instrucciones
cuerpo 
    : instruccion
    | cuerpo instruccion
    ;

// Una instrucción es, por ahora, solo una instrucción de retorno
instruccion 
    : retorno
    ;

// Instrucción de retorno: "return" seguido de una expresión y ;
retorno 
    : 'return' expresion ';'
    ;

// Expresiones aritméticas
expresion 
    : expresion '+' termino
    | expresion '-' termino
    | termino
    ;

termino 
    : termino '*' factor
    | termino '/' factor
    | factor
    ;

factor 
    : '(' expresion ')'
    | DIGITO
    | IDENTIFICADOR
    ;

// Regla de lexer para IDENTIFICADOR directamente (una letra seguida de letras o dígitos)
IDENTIFICADOR : [a-zA-Z] ([a-zA-Z0-9])* ;

// Regla de lexer para un dígito (ya que DIGITO se usa en factor)
DIGITO : [0-9] ;

// Ignorar espacios y saltos de línea
WS: [ \t\r\n]+ -> skip;
