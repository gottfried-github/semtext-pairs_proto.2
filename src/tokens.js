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
        match: /[^\u0028\u0029\u007B\u007D]+/,
        lineBreaks: true
    },
}

module.exports = {
    tokens
}
