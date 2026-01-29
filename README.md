<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# anyByRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import anyByRight from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-any-by-right@deno/mod.js';
```

#### anyByRight( collection, predicate\[, thisArg ] )

Tests whether at least one element in a `collection` passes a test implemented by a `predicate` function, iterating from right to left.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var arr = [ -1, 1, 2, 3, 4 ];

var bool = anyByRight( arr, isNegative );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `true`.

```javascript
function isNegative( value ) {
    if ( value > 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value < 0 );
}

var arr = [ -1, -2, 3, -4 ];

var bool = anyByRight( arr, isNegative );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: collection element.
-   **index**: collection index.
-   **collection**: input collection.

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return ( value < 0 );
}

var arr = [ -5, 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var bool = anyByRight( arr, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   If provided an empty collection, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = anyByRight( [], alwaysTrue );
    // returns false
    ```

-   The function differs from [`Array.prototype.some`][mdn-array-some] in the following ways:

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
            return ( value < 0 );
        }

        var arr = [ -1, 1, , , 4 ];

        var bool = anyByRight( arr, log );
        /* =>
            4: 4
            3: undefined
            2: undefined
            1: 1
            0: -1
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution). Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import anyByRight from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-any-by-right@deno/mod.js';

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

bool = anyByRight( arr, threshold );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-any-by`][@stdlib/utils/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/utils-async/any-by-right`][@stdlib/utils/async/any-by-right]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-every-by-right`][@stdlib/utils/every-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-for-each-right`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-none-by-right`][@stdlib/utils/none-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-some-by-right`][@stdlib/utils/some-by-right]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-any-by-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-any-by-right

[test-image]: https://github.com/stdlib-js/utils-any-by-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-any-by-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-any-by-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-any-by-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-any-by-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-any-by-right/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-any-by-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-any-by-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-any-by-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-any-by-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-any-by-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-any-by-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-any-by-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-any-by-right/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[mdn-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

<!-- <related-links> -->

[@stdlib/utils/any-by]: https://github.com/stdlib-js/utils-any-by/tree/deno

[@stdlib/utils/async/any-by-right]: https://github.com/stdlib-js/utils-async-any-by-right/tree/deno

[@stdlib/utils/every-by-right]: https://github.com/stdlib-js/utils-every-by-right/tree/deno

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils-for-each-right/tree/deno

[@stdlib/utils/none-by-right]: https://github.com/stdlib-js/utils-none-by-right/tree/deno

[@stdlib/utils/some-by-right]: https://github.com/stdlib-js/utils-some-by-right/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
