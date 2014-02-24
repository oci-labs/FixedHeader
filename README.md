# FixedHeader [![Build Status](https://secure.travis-ci.org/objectcomputing/FixedHeader.png)](http://travis-ci.org/objectcomputing/FixedHeader)

AngularJS Directive and CSS for creating scrollable tables with fixed
headers.

Creating scrollable tables with fixed headers that do not scroll off
the screen is tricky due to the way tables work in HTML.  We use the
the techniques described by Miriam Salzer here:
[Don’t Mess With Tables – Pure CSS Fixed-Header Left-Aligned Tables](http://salzerdesign.com/blog/?p=191),
and wrap them up in a reusable AngularJS directive.

## Usage

Add `dist/fixed-header.js` and `dist/fixed-header.css` to your
index.html.

Add `fixedHeader` as a module dependency on your module:

```js
angular.module('app', ['fixedHeader']);
```

Add `fixed-header` as an attribute to your table:

```html
<div class="my-table">
  <table fixed-header>
  <!-- table markup goes here ... -->
  </table>
</div>
```

Note the wrapper div with the class `demo-table`.  The `fixed-header`
directive adds wrapper divs around the table, so we need
`div.my-table` for our custom CSS below:

Add custom css to control the height of the table and the height of
the header row:

```css
div.my-table div.fixed-table-container-inner {
    /* the maximum height of the table: */
    max-height: 150px;

    border: 1px solid #aaaaaa;
    width: 150px;
}

div.my-table div.th-inner {
    /* the height of the header row */
    line-height: 30px;
}

div.my-table div.fixed-table-container {
    /* the height of the header row - this needs to match line-height above */
   padding-top: 30px;
}

div.my-table tr.hidden-header .th-inner {
  padding-right: 5px;
}

```

## Demo

[fixed-header demo](http://objectcomputing.github.io/FixedHeader/demo/index.html)

## Authors

- Lance Finney finneyl@ociweb.com
- Steve Molitor molitors@ociweb.com
