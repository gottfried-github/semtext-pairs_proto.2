@{%
    const moo = require('moo')
    const {text, entityLabel, entityNode, entityContent, entityNodeContent, valueSingle, entity, rootEntity} = require("./postprocessors.js")

    const {tokens} = require('./tokens.js')

    const lexer = moo.compile(tokens)
%}

@lexer lexer

# entities -> (entity _):*

root_entity -> entity _ {% rootEntity %}

entity -> entity_label entity_node {% entity %}

entity_node -> %dblBraceCrlOpen entity_content _ %dblBraceCrlClose {% entityNode %}

entity_content -> (_ value_single {% entityNodeContent %}):* {% entityContent %}

value_single -> (text | entity) {% valueSingle %}

entity_label -> %braceOpen text %braceClose {% entityLabel %}

# text -> ((%braceOpen | %braceClose):* label_text (%braceOpen | %braceClose):*):*

text -> %text {% text %}

_ -> null | %space {% v => { if (v[0].type === "space") {return v[0]} else {return null}; } %}
