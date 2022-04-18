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

# Converter
Any render function (be it `renderBottomUp` or `img`) should return a dom node.

## `renderBottomUp`
Creates a dom node with the corresponding tag, appends the rendered children and returns the node.

## `img`
Treats first occurring `text` node as the `src` attribute.
