# Basics of Unicode character ranking and ranges
The *BMP (Basic Multilingual Plane)* range is *0000-FFFF*.
Unicode uses digits and (uppercase) letters to rank the characters. E.g.:
* 0001 is smaller than 000A
* 0009 is smaller than 000A
* 000A is smaller than 000F
* 000F is smaller than 0010
* 0010 is smaller than 001A

# The text token
## Character ranges that exclude the characters, used in other tokens
1. `(` is `0028`
2. `)` is `0029`
3. `{` is `007B`
4. `}` is `007D`

These ranges therefore exclude the characters above from the `BMP`:
pre-`(`: `0000-0027`
post-`(`, pre-`{`: `002A-007A`
post-`{`, pre-`}`: `007C`
post-`}`: `007E-FFFF`

## The logic of regex
The logic of regex is to have:
1. groups of texts, where one group represents the text where there's none of the characters belonging to any of the tokens;
2. groups, which entirely consist of characters belonging to one of the tokens.
The two kinds of groups are mutually exclusive: the first kind doesn't contain characters from the second kind and vice-versa.
