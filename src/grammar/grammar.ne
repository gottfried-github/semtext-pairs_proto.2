@{%
    const moo = require('moo')
    const {tokens} = require('./tokens.js')
    const lexer = moo.compile(tokens)
    console.log(lexer)
%}

# value -> "a"

@lexer lexer

entity -> entity_label entity_node

value_single -> (text | entity)

entity_node -> %dblBraceCrlOpen (value_single):* %dblBraceCrlClose

entity_label -> %braceOpen text %braceClose

text -> %text

_ -> null | %space {% v => { if (v[0].type === "space") {return v[0]} else {return null}; } %}
