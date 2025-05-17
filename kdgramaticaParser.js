// Generated from kdgramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import kdgramaticaListener from './kdgramaticaListener.js';
import kdgramaticaVisitor from './kdgramaticaVisitor.js';

const serializedATN = [4,1,17,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,55,8,4,10,4,12,4,58,9,
4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,68,8,6,10,6,12,6,71,9,6,1,7,1,7,1,
8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,88,8,9,10,9,12,9,91,
9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,102,8,10,10,10,12,
10,105,9,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,113,8,11,1,11,0,5,2,8,12,
18,20,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,5,7,111,0,24,1,0,0,0,2,27,
1,0,0,0,4,37,1,0,0,0,6,46,1,0,0,0,8,48,1,0,0,0,10,59,1,0,0,0,12,62,1,0,0,
0,14,72,1,0,0,0,16,74,1,0,0,0,18,78,1,0,0,0,20,92,1,0,0,0,22,112,1,0,0,0,
24,25,3,2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,6,1,-1,0,28,29,3,4,2,0,29,
34,1,0,0,0,30,31,10,1,0,0,31,33,3,4,2,0,32,30,1,0,0,0,33,36,1,0,0,0,34,32,
1,0,0,0,34,35,1,0,0,0,35,3,1,0,0,0,36,34,1,0,0,0,37,38,3,6,3,0,38,39,5,15,
0,0,39,40,5,1,0,0,40,41,3,8,4,0,41,42,5,2,0,0,42,43,5,3,0,0,43,44,3,12,6,
0,44,45,5,4,0,0,45,5,1,0,0,0,46,47,7,0,0,0,47,7,1,0,0,0,48,49,6,4,-1,0,49,
50,3,10,5,0,50,56,1,0,0,0,51,52,10,1,0,0,52,53,5,8,0,0,53,55,3,10,5,0,54,
51,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,9,1,0,0,0,58,56,
1,0,0,0,59,60,3,6,3,0,60,61,5,15,0,0,61,11,1,0,0,0,62,63,6,6,-1,0,63,64,
3,14,7,0,64,69,1,0,0,0,65,66,10,1,0,0,66,68,3,14,7,0,67,65,1,0,0,0,68,71,
1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,13,1,0,0,0,71,69,1,0,0,0,72,73,3,
16,8,0,73,15,1,0,0,0,74,75,5,9,0,0,75,76,3,18,9,0,76,77,5,10,0,0,77,17,1,
0,0,0,78,79,6,9,-1,0,79,80,3,20,10,0,80,89,1,0,0,0,81,82,10,3,0,0,82,83,
5,11,0,0,83,88,3,20,10,0,84,85,10,2,0,0,85,86,5,12,0,0,86,88,3,20,10,0,87,
81,1,0,0,0,87,84,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,19,
1,0,0,0,91,89,1,0,0,0,92,93,6,10,-1,0,93,94,3,22,11,0,94,103,1,0,0,0,95,
96,10,3,0,0,96,97,5,13,0,0,97,102,3,22,11,0,98,99,10,2,0,0,99,100,5,14,0,
0,100,102,3,22,11,0,101,95,1,0,0,0,101,98,1,0,0,0,102,105,1,0,0,0,103,101,
1,0,0,0,103,104,1,0,0,0,104,21,1,0,0,0,105,103,1,0,0,0,106,107,5,1,0,0,107,
108,3,18,9,0,108,109,5,2,0,0,109,113,1,0,0,0,110,113,5,16,0,0,111,113,5,
15,0,0,112,106,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,23,1,0,0,0,8,
34,56,69,87,89,101,103,112];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class kdgramaticaParser extends antlr4.Parser {

    static grammarFileName = "kdgramatica.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'int'", "'float'", 
                            "'char'", "','", "'return'", "';'", "'+'", "'-'", 
                            "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFICADOR", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "parametros", "parametro", "cuerpo", "instruccion", 
                         "retorno", "expresion", "termino", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = kdgramaticaParser.ruleNames;
        this.literalNames = kdgramaticaParser.literalNames;
        this.symbolicNames = kdgramaticaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 4:
    	    		return this.parametros_sempred(localctx, predIndex);
    	case 6:
    	    		return this.cuerpo_sempred(localctx, predIndex);
    	case 9:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 10:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    parametros_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    cuerpo_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, kdgramaticaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.declaraciones(0);
	        this.state = 25;
	        this.match(kdgramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, kdgramaticaParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.declaracion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new DeclaracionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_declaraciones);
	                this.state = 30;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 31;
	                this.declaracion(); 
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, kdgramaticaParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.tipo();
	        this.state = 38;
	        this.match(kdgramaticaParser.IDENTIFICADOR);
	        this.state = 39;
	        this.match(kdgramaticaParser.T__0);
	        this.state = 40;
	        this.parametros(0);
	        this.state = 41;
	        this.match(kdgramaticaParser.T__1);
	        this.state = 42;
	        this.match(kdgramaticaParser.T__2);
	        this.state = 43;
	        this.cuerpo(0);
	        this.state = 44;
	        this.match(kdgramaticaParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, kdgramaticaParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	parametros(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ParametrosContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, kdgramaticaParser.RULE_parametros, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.parametro();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ParametrosContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_parametros);
	                this.state = 51;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 52;
	                this.match(kdgramaticaParser.T__7);
	                this.state = 53;
	                this.parametro(); 
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, kdgramaticaParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.tipo();
	        this.state = 60;
	        this.match(kdgramaticaParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	cuerpo(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CuerpoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, kdgramaticaParser.RULE_cuerpo, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CuerpoContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_cuerpo);
	                this.state = 65;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 66;
	                this.instruccion(); 
	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, kdgramaticaParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, kdgramaticaParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(kdgramaticaParser.T__8);
	        this.state = 75;
	        this.expresion(0);
	        this.state = 76;
	        this.match(kdgramaticaParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, kdgramaticaParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 87;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_expresion);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 82;
	                    this.match(kdgramaticaParser.T__10);
	                    this.state = 83;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_expresion);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 85;
	                    this.match(kdgramaticaParser.T__11);
	                    this.state = 86;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, kdgramaticaParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 101;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_termino);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 96;
	                    this.match(kdgramaticaParser.T__12);
	                    this.state = 97;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, kdgramaticaParser.RULE_termino);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 99;
	                    this.match(kdgramaticaParser.T__13);
	                    this.state = 100;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, kdgramaticaParser.RULE_factor);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.match(kdgramaticaParser.T__0);
	            this.state = 107;
	            this.expresion(0);
	            this.state = 108;
	            this.match(kdgramaticaParser.T__1);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(kdgramaticaParser.DIGITO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.match(kdgramaticaParser.IDENTIFICADOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

kdgramaticaParser.EOF = antlr4.Token.EOF;
kdgramaticaParser.T__0 = 1;
kdgramaticaParser.T__1 = 2;
kdgramaticaParser.T__2 = 3;
kdgramaticaParser.T__3 = 4;
kdgramaticaParser.T__4 = 5;
kdgramaticaParser.T__5 = 6;
kdgramaticaParser.T__6 = 7;
kdgramaticaParser.T__7 = 8;
kdgramaticaParser.T__8 = 9;
kdgramaticaParser.T__9 = 10;
kdgramaticaParser.T__10 = 11;
kdgramaticaParser.T__11 = 12;
kdgramaticaParser.T__12 = 13;
kdgramaticaParser.T__13 = 14;
kdgramaticaParser.IDENTIFICADOR = 15;
kdgramaticaParser.DIGITO = 16;
kdgramaticaParser.WS = 17;

kdgramaticaParser.RULE_programa = 0;
kdgramaticaParser.RULE_declaraciones = 1;
kdgramaticaParser.RULE_declaracion = 2;
kdgramaticaParser.RULE_tipo = 3;
kdgramaticaParser.RULE_parametros = 4;
kdgramaticaParser.RULE_parametro = 5;
kdgramaticaParser.RULE_cuerpo = 6;
kdgramaticaParser.RULE_instruccion = 7;
kdgramaticaParser.RULE_retorno = 8;
kdgramaticaParser.RULE_expresion = 9;
kdgramaticaParser.RULE_termino = 10;
kdgramaticaParser.RULE_factor = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	EOF() {
	    return this.getToken(kdgramaticaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_declaraciones;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(kdgramaticaParser.IDENTIFICADOR, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_parametros;
    }

	parametro() {
	    return this.getTypedRuleContext(ParametroContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(kdgramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_cuerpo;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_retorno;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = kdgramaticaParser.RULE_factor;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	DIGITO() {
	    return this.getToken(kdgramaticaParser.DIGITO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(kdgramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof kdgramaticaListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof kdgramaticaVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




kdgramaticaParser.ProgramaContext = ProgramaContext; 
kdgramaticaParser.DeclaracionesContext = DeclaracionesContext; 
kdgramaticaParser.DeclaracionContext = DeclaracionContext; 
kdgramaticaParser.TipoContext = TipoContext; 
kdgramaticaParser.ParametrosContext = ParametrosContext; 
kdgramaticaParser.ParametroContext = ParametroContext; 
kdgramaticaParser.CuerpoContext = CuerpoContext; 
kdgramaticaParser.InstruccionContext = InstruccionContext; 
kdgramaticaParser.RetornoContext = RetornoContext; 
kdgramaticaParser.ExpresionContext = ExpresionContext; 
kdgramaticaParser.TerminoContext = TerminoContext; 
kdgramaticaParser.FactorContext = FactorContext; 
