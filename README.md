# pocket-r: moved to denr

Pocket R is now **denr**: <https://jossammil.github.io/denr/> (repository
[jossammil/denr](https://github.com/jossammil/denr)).

This repository only keeps the old address working:

- `index.html` and `404.html` forward any page under
  `jossammil.github.io/pocket-r/` to the same page under `/denr/`, keeping
  `#share=` links.
- `sw.js` replaces the old app's service worker, so browsers stop serving the
  cached old app here.
