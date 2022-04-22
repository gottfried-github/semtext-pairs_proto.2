# Semantic text via label/entity pairs
## Install
`npm i --save semtext-pairs_proto.2`

## Syntax
The syntax has two tokens:
1. **entity:** `{{}}`
2. **label:** `()`
    
The `label` is only used together with an `entity`, like this: `(label){{entity content}}`. See `demo/example-text.semtext`

# Parsed data
## Originally parsed data
`nearley.js` parses the tokens into certain data structure, which, among other things has:
1. `type`: the name of the parsed token;
2. `value`: the parsed value
The `type: text` node has `text` property, which is ought to be used over `value` (e.g., it includes leading whitespace).

## Processed data
In the postprocessing stage, I convert the parsed data into *nodes*.
The nodes are either `entity` or `text`. The root node is always an `entity`.

## Entity
1. `label`: originally parsed `text`
2. `node`: an array of nodes

## Text
Originally parsed `text`

## Use
```javascript
import nearley from 'nearley'
import grammar from 'semtext-pairs_proto.2'

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed("(article){{My blogpost content here}}")
const parsed = parser.results[0]
```
