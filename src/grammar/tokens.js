const tokens = {
    dblBraceCrlOpen: {
      match: /\{{2}/
    },
    // type: moo.keywords({dblBraceOpenKw: "{{"}),
    dblBraceCrlClose: {
      match: /\}{2}/
    },
    braceOpen: {
      match: /\(/
    },
    braceClose: {
      match: /\)/
    },
    space: {
        match: /\s+/,
        lineBreaks: true
    },
    text: {
        // see The text token
        match: /(?:[^\{\}\(\)]+|(?:\([^\{\}]*\))(?!\{))+/,
        lineBreaks: true
    },
}
// |(?:\([^\{\}\(\)]+\))(?!\{))+
// /(?:[^\{\}\(\)]+|(?:\(+[^\{\}\(\)]*(?:\(*\)*))(?!\{)|(?:\([^\{\}\(\)]+\))(?!\{))+/
// (?:\([^\{\}\(\)]+\))(?!\{))

module.exports = {
    tokens
}
