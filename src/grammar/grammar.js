// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    const moo = require('moo')
    const {text, entityLabel, entityNode, valueSingle, entity} = require("./postprocessors.js")

    const {tokens} = require('./tokens.js')

    const lexer = moo.compile(tokens)
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "entity", "symbols": ["entity_label", "entity_node"], "postprocess": entity},
    {"name": "value_single$subexpression$1", "symbols": ["text"]},
    {"name": "value_single$subexpression$1", "symbols": ["entity"]},
    {"name": "value_single", "symbols": ["value_single$subexpression$1"], "postprocess": valueSingle},
    {"name": "entity_node$ebnf$1", "symbols": []},
    {"name": "entity_node$ebnf$1$subexpression$1", "symbols": ["value_single"]},
    {"name": "entity_node$ebnf$1", "symbols": ["entity_node$ebnf$1", "entity_node$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "entity_node", "symbols": [(lexer.has("dblBraceCrlOpen") ? {type: "dblBraceCrlOpen"} : dblBraceCrlOpen), "entity_node$ebnf$1", (lexer.has("dblBraceCrlClose") ? {type: "dblBraceCrlClose"} : dblBraceCrlClose)], "postprocess": entityNode},
    {"name": "entity_label", "symbols": [(lexer.has("braceOpen") ? {type: "braceOpen"} : braceOpen), "text", (lexer.has("braceClose") ? {type: "braceClose"} : braceClose)], "postprocess": entityLabel},
    {"name": "text", "symbols": [(lexer.has("text") ? {type: "text"} : text)], "postprocess": text},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": [(lexer.has("space") ? {type: "space"} : space)], "postprocess": v => { if (v[0].type === "space") {return v[0]} else {return null}; }}
]
  , ParserStart: "entity"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
