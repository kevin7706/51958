import kdgramaticaLexer from "./kdgramaticaLexer.js";
import kdgramaticaParser from "./kdgramaticaParser.js";
import antlr4 from "antlr4";
import fs from "fs";
import MyVisitor from './MyVisitor.js';

// Función que encapsula todo el proceso de análisis para un archivo dado.
function analyzeFile(filePath) {
  try {
    // 1. Leer el archivo de entrada
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const chars = new antlr4.InputStream(fileContent);

    // 2. Crear el lexer y el stream de tokens
    const localLexer = new kdgramaticaLexer(chars);
    localLexer.removeErrorListeners();
    localLexer.addErrorListener({
      syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        console.error(`Error léxico en ${filePath} línea ${line}:${column} - ${msg}`);
      }
    });
    const tokens = new antlr4.CommonTokenStream(localLexer);
    tokens.fill();

    console.log(`\n=== Analizando archivo: ${filePath} ===\n`);

    // 3. Imprimir tabla de lexemas y tokens
    console.log("Tabla de Lexemas y Tokens:");
    console.log("------------------------------------------------");
    console.log("| Lexema               | Token                |");
    console.log("------------------------------------------------");
    tokens.tokens.forEach(token => {
      if (token.type !== antlr4.Token.EOF) {
        let tokenName = kdgramaticaLexer.symbolicNames[token.type] || token.text || "UNKNOWN";
        console.log(`| ${token.text.padEnd(20)} | ${tokenName.padEnd(20)} |`);
      }
    });
    console.log("------------------------------------------------");

    // 4. Crear el parser y generar el árbol sintáctico
    const localParser = new kdgramaticaParser(tokens);
    localParser.removeErrorListeners();
    localParser.addErrorListener({
      syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        console.error(`Error sintáctico en ${filePath} línea ${line}:${column} - ${msg}`);
      }
    });
    localParser.buildParseTrees = true;
    const tree = localParser.programa();

    console.log("Árbol de Análisis Sintáctico:");
    console.log(tree.toStringTree(localParser.ruleNames));

    // 5. Interpretación: Visitor para traducir el árbol a código JavaScript
    const visitor = new MyVisitor();
    const jsCode = visitor.visit(tree);
    console.log("Código JavaScript generado:");
    console.log(jsCode);

    // 6. Ejecutar el código generado (usa eval con precaución)
    try {
      eval(jsCode);
    } catch (e) {
      console.error(`Error al ejecutar el código generado en ${filePath}: ${e.message}`);
    }
    console.log("\n------------------------------------------------\n");
  } catch (err) {
    console.error(`Error al procesar el archivo ${filePath}: ${err.message}`);
  }
}

// Llamadas de ejemplo para analizar distintos archivos de entrada:
analyzeFile("input_correct1.txt");
analyzeFile("input_correct2.txt");
analyzeFile("input_incorrect1.txt");
analyzeFile("input_incorrect2.txt");
