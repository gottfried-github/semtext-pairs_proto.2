# Grammar
## `tokens.js`: the logic of the token matchers
The logic of regex is to have:
1. groups of texts, where one group represents the text where there's none of the characters belonging to any of the tokens;
2. groups, which entirely consist of characters belonging to one of the tokens.
The two kinds of groups are mutually exclusive: the first kind doesn't contain characters from the second kind and vice-versa.

In the `tokens` in `tokens.js`, the `text` token is the example of `1` while the other tokens are examples of the `2`.

## `text` token matching: excluding the other tokens
### Basics of Unicode character ranking and ranges
The *BMP (Basic Multilingual Plane)* range is *0000-FFFF*.
Unicode uses digits and (uppercase) letters to rank the characters. E.g.:
* 0001 is smaller than 000A
* 0009 is smaller than 000A
* 000A is smaller than 000F
* 000F is smaller than 0010
* 0010 is smaller than 001A

### Characters, used in the other tokens
1. `(` is `0028`
2. `)` is `0029`
3. `{` is `007B`
4. `}` is `007D`

### `text`: allowing braces in text - if not followed by open curly brace
Following the logic, described in `'the logic of the token matchers'`, we should exclude braces-enclosed text followed by an opening curly brace, e.g.: `(a){`. Ideally, we'd also exclude this: `((a)){`. E.g., in `a (b) c (d){{e}}`, we want to match `a (b) c `. Equally, for `a (b) c ((d)){{e}}`.
The `2.` *regexp* does the exclusion, but it doesn't allow the `(c)` in `a (b (c)) d ((e)){{f}}` (i.e., nested parentheses in text).
With the `2.`, the parser will allow this: `a (b) c (d (e) f){{g}}` - here, the label will be `d (e) f`; but this will have an error: `a (b) c (d (e (f))){{}}` (as well as this: `a (b) c ((d)){{e}}`). Also, this will have an error: `a (b (c)) d (e){{f}}`.
The `1.` regexp allows this: `a (b (c))`; it excludes `(d){{e}}` (in `a (b) c (d){{e}}` it parses `a (b) c `), but it doesn't fully exclude this: `((d)){{e}}` - it parses `((d)`.
With the `1.` regexp, the parser won't allow the last example.
