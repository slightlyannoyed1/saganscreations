# Adding Real Photos

Drop your product photos into this `images/` folder, then swap the placeholder
in `index.html` for a real `<img>` tag.

Each product card currently looks like this:

```html
<div class="product-photo placeholder-photo food-placeholder">
  <span class="placeholder-icon">🌈🥞</span>
  <span class="placeholder-text">Photo coming soon!</span>
</div>
```

Replace the whole `<div>...</div>` with an `<img>` tag pointing at your photo,
keeping the `product-photo` class so it stays styled correctly:

```html
<img src="images/rainbow-pancake-stack.jpg" alt="Rainbow Pancake Stack clay piece" class="product-photo">
```

Tips:
- Use square-ish photos if you can — the cards are designed for a 1:1 shape.
- Keep file sizes reasonably small (under ~1MB each) so the site loads fast.
- Use simple lowercase file names with dashes, e.g. `rocket-ship.jpg`, `cake-slice.jpg`.
