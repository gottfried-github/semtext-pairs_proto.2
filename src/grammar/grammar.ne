{%
    import moo = from 'moo'
    import tokens from './tokens.js'
    const lexer = moo.compile(tokens)
%}

@lexer lexer

_ -> null | %space {% v => { if (v[0].type === "space") {return v[0]} else {return null}; } %}

text -> %text {%
  v => {
    // console.log('%text', parsed[0])
    // return new tokens.TextResource(val[0].value, val[0])
  }
%}

entity_label -> %braceOpen text %braceClose {%
  v => {
    // return new tokens.NodeId(val[1].value, val[0])
  }
%}

entity_node -> %dblBraceCrlOpen (value_single):* %dblBraceCrlClose

entity -> entity_label entity_node

value_single -> (text | entity)
