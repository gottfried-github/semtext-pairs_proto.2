@{%
    const moo = require('moo')
    const {text, entityLabel, entityNode, valueSingle, entity} = require("./postprocessors.js")

    const {tokens} = require('./tokens.js')

    const lexer = moo.compile(tokens)
%}

@lexer lexer

entity -> entity_label entity_node {% entity %}

value_single -> (text | entity) {% valueSingle %}

entity_node -> %dblBraceCrlOpen (value_single):* %dblBraceCrlClose {% entityNode %}

entity_label -> %braceOpen text %braceClose {% entityLabel %}

text -> %text {% text %}

_ -> null | %space {% v => { if (v[0].type === "space") {return v[0]} else {return null}; } %}
