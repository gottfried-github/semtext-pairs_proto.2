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
        match: /[\u0000-\u0027]*[\u002A-\u007A]*\u007C*[\u007E-\uFFFF]*\s*/,
        lineBreaks: true
    }
}

export {

}
