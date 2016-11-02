# anora

Figure out if a words needs "an" or "a" in front of it.

## Installation
```
npm install --save anora
```

## Example

```
var anora = require('anora');

anora("computer") // 'a'
anora("object") // 'an'
anora("freeman") // 'a'
```

## Improvements

This implementation is far from perfect. As described here:

http://www.quickanddirtytips.com/education/grammar/a-versus-an

Words like "honour" and "one-off" will not work properly.

Pull requests are much appreciated, with two rules to bear in mind:
- The tool must be synchronous. No promises or callbacks.
- The PR must demonstrate before/after examples - broken with the previous version, and fixed in the new version.

Shake n bake!
