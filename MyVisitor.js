// MyVisitor.js
import kdgramaticaVisitor from "./kdgramaticaVisitor.js";

class MyVisitor extends kdgramaticaVisitor {
  constructor() {
    super();
    // Realiza inicializaciones adicionales si es necesario.
  }

  visitPrograma(ctx) {
    return this.visit(ctx.declaraciones());
  }

  visitDeclaracion(ctx) {
    const id = ctx.IDENTIFICADOR().getText();
    const parametros = this.visit(ctx.parametros());
    const cuerpo = this.visit(ctx.cuerpo());
    return `function ${id}(${parametros}) { ${cuerpo} }`;
  }
    // Convertir la lista de parámetros (una lista separada por comas)
    visitParametros(ctx) {
        let params = [];
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            if (child.getText() !== ',') {
                params.push(this.visit(child));
            }
        }
        return params.join(', ');
    }
    // Convertir el parámetro (se usa solo el identificador)
    visitParametro(ctx) {
        return ctx.IDENTIFICADOR().getText();
    }
    // Visitar el cuerpo de la función
    visitCuerpo(ctx) {
        let code = '';
        for (let i = 0; i < ctx.getChildCount(); i++) {
            code += this.visit(ctx.getChild(i)) + "\n";
        }
        return code;
    }
    // Convertir la instrucción de retorno
    visitRetorno(ctx) {
        return 'return ' + this.visit(ctx.expresion()) + ';';
    }
    // Para las expresiones, términos y factores se hace similarmente:
    visitExpresion(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.getChild(0));
        }
        const left = this.visit(ctx.getChild(0));
        const operator = ctx.getChild(1).getText();
        const right = this.visit(ctx.getChild(2));
        return left + ' ' + operator + ' ' + right;
    }
    visitTermino(ctx) {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.getChild(0));
        }
        const left = this.visit(ctx.getChild(0));
        const operator = ctx.getChild(1).getText();
        const right = this.visit(ctx.getChild(2));
        return left + ' ' + operator + ' ' + right;
    }
    visitFactor(ctx) {
        if (ctx.getChildCount() === 3) { // Caso de '(' expresion ')'
            return '(' + this.visit(ctx.getChild(1)) + ')';
        }
        return ctx.getChild(0).getText();
    }
}











export default MyVisitor;
