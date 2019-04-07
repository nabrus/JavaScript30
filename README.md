![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

### Index of Each Day
With a list of highlights.

### [Day 1: JavaScript Drum Kit](https://github.com/nabrus/JavaScript30/tree/master/01-js-drum-kit)
  * `data-*` attributes.
  * `Element.classList` with the `add(..)` method.
  * `KeyBoardEvent` object. `keydown` event type.
  * `transitionend` event. Fired when a CSS transition has completed.
  * `HTMLMediaElement.play()`: Audio playback.

### [Day 2: CSS + JS Clock](https://github.com/nabrus/JavaScript30/tree/master/02-js-css-clock)
  * `setInterval()` method. Repeatedly calls a function or executes a code snippet.
  * CSS properties `transform-origin`, `transition-timing-function: cubic-bezier(0.1, 2.92, 0.58, 1)`

### [Day 3: Playing with CSS Variables and JS](https://github.com/nabrus/JavaScript30/tree/master/03-css-variables)
  * CSS variables: custom property notation (e.g., `--main-color: black;`). Accessed using the `var()` function (e.g.,`color: var(--main-color);`).
  * `dataset` property.
  * Iterating a `NodeList`.
  * `change` event used for `<input>` element.
  * `mousemove` event. Used when pointing device is moved while over an element.
  * `CSSStyleDeclaration.setProperty()` method used to set a new value for the custom properties. `style.setProperty(propertyName, value, priority);`

### [Day 4: Array Cardio Day 1](https://github.com/nabrus/JavaScript30/tree/master/04-array-cardio-day1)
  * `Array.prototype.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
  * `Array.prototype.map()` method creates a new array with the results of calling a provided function on every element in the calling array.
  * `Array.prototype.sort()` method sorts the elements of an array in place and returns the array. Used with a `compareFunction` which specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
  * `Array.prototype.reduce()` method executes a **reducer** function (that you provide) on each member of the array resulting in a single output value.

### [Day 5: Flex Panels Image Gallery](https://github.com/nabrus/JavaScript30/tree/master/05-flex-panel-gallery)
  * Transistions benefit from using a FlexBox layout. 
  * `translateY()` CSS function.
  * `transitionend` event.
  * `Element.classList` `toggle( String [, force] )`

### [Day 6: Ajax Type Ahead](https://github.com/nabrus/JavaScript30/tree/master/06-type-ahead)
  * `fetch()` method provides a way to fetch resources asynchronously across the network.
  * `keyup` event, fired when a key is released.
  * `change` event, fires for `<input>`, `<select>`, and `<textarea>` elements when an alteration to the element's value is committed by the user.
  * `new RegExp(pattern[, flags])` The `RegExp` constructor creates a regular expression object for matching text with a pattern.
  * The `match()` method retrieves the result of matching a string against a regular expression.
  * The `replace()` method returns a new string with some or all matches of a `pattern` (string or `RegExp`) replaced by a `replacement` (string or a function to be called for each match).

### [Day 7: Array Cardio Day 2](https://github.com/nabrus/JavaScript30/tree/master/07-array-cardio-day2)
  * `Array.prototype.some()` method tests whether **at least one** element in the array passes the test implemented by the provided function.
  * `Array.prototype.every()` method tests whether **all** elements in the array pass the test implemented by the provided function.
  * `Array.prototype.find()` method returns the **value** of the **first element** in the array that satisfies the provided testing function. Otherwise `undefined` is returned.
  * `Array.prototype.findIndex()` returns the **index** of the first element in the array **that satisfies the provided testing function**. Otherwise, it returns -1, indicating no element passed the test.

### [Day 8: Fun with HTML5 Canvas](https://github.com/nabrus/JavaScript30/tree/master/08-fun-with-HTML5-canvas)
  * Canvas API
  * `mousemove` event is fired when a pointing device (usually a mouse) is moved while over an element.
  * `mousedown` event is fired when a pointing device button is pressed on an element.
  * `mouseup` event is fired when a pointing device button is released over an element.
  * `mouseout` event is fired when a pointing device (usually a mouse) is moved off the element that has the listener attached or off one of its children. Note that it is also triggered on the parent when you move onto a child element, since you move out of the visible space of the parent.
  * Using event information to draw on the canvas.
  * Setting a "flag" variable. Toggling between `true` and `false` boolean.

### [Day 9: 14 Must Know Dev Tools Tricks](https://github.com/nabrus/JavaScript30/tree/master/09-dev-tools-domination)
  * Adding styles to `console.log(..)` by using `%c` as a prefix to what will be styled as first argument. The second argument is the CSS style patterns.
  * `console.warn(..)` Outputs a warning message to the Web Console.
  * `console.error(..)` Outputs an error message to the Web Console.
  * `console.info(..)` Outputs an informational message to the Web Console. In Firefox and Chrome, a small "i" icon is displayed next to these items in the Web Console's log.
  * `console.assert(..)` Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
  * `console.clear()` Clears the console. The Console's contents will be replaced with an informational message like "Console was cleared".
  * `console.dir(..)` Displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
  * `console.group` Creates a new inline group (and `console.groupCollapsed()` creates a collapsed group) in the Web Console log. This indents following console messages by an additional level, until `console.groupEnd()` is called.
  * `console.count(..)` Logs the number of times that this particular call to count() has been called.
  * `console.time(..)` Starts a timer you can use to track how long an operation takes.
  * `console.table(..)` Displays tabular data as a table.

### [Day 10: Hold Shift to Check Multiple Check Boxes](https://github.com/nabrus/JavaScript30/tree/master/10-hold-shift-and-check-checkboxes)
  * `KeyboardEvent.shiftKey` property (read-only) is a `Boolean`.
  * Looping through `NodeList` with `forEach(..)`.
  * Setting a variable for elements in between a criteria and reversing it when met.

### [Day 11: Custom HTML5 Video Player](https://github.com/nabrus/JavaScript30/tree/master/11-custom-video-player)
  * `HTMLMediaElement.paused` property
  * `.play()` `.paused()` methods.
  * `dataset`
  * `parseFloat` parses its argument, and returns a floating point number.
  * `flex-basis`
  * `HTMLMediaElement.currentTime` property gives the current playback time in seconds. Setting this value seeks the media to the new time. 
  * `HTMLMediaElement.duration` property gives the length of the media in seconds, or zero if no media data is available.
  * `timeupdate` event is fired when the time indicated by the `currentTime` attribute has been updated.
  * "flag" variable
  * `fullscreenElement` attribute

### [Day 12: Key Sequence Detection (KONAMI CODE)](https://github.com/nabrus/JavaScript30/tree/master/12-key-sequence-detection)
  * Listening for `keyup`.
  * Storing `e.key` in an array.
  * Check if array matches the desired sequence. 
  * `splice()`  method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### [Day 13: Slide In on Scroll](https://github.com/nabrus/JavaScript30/tree/master/13-slide-in-on-scroll) 
  * Debounce scroll function.
  * `scrollY`
  * `.offsetTop`
  * `innerHeight`

### [Day 14: Object and Arrays - Reference VS Copy](https://github.com/nabrus/JavaScript30/tree/master/14-js-references-vs-copying)
  * Strings, numbers, null, undefined, and booleans are **copied** when assigning variables to other variables using `=`. 
  * Variables that are assigned a non-primitive value are given a **reference** to that value. Objects—`Array`, `Object`, and `Function`.
  * Ways to create shallow copies of arrays:
    * `array.slice();`
    * `[].concat(array)`
    * `[...array];`
    * `Array.from(array);`
  * Creating shallow copies of objects:
    * `Object.assign({}, object, { property: value })`
    * `{ ...object }`

### [Day 15: LocalStorage and Event Delegation](https://github.com/nabrus/JavaScript30/tree/master/15-localStorage)
  * `localStorage` property allows you to access a `Storage` object for the `Document`'s origin; the stored data is saved across browser sessions.
  * `localStorage.setItem(..)` adds a data item.
  * `localStorage.getItem(..)` reads a data item.
  * `localStorage.removeItem(..)` removes a data item.
  * `localStorage.clear()` removes all `localStorage` items.
  * Event Delegation — this concept relies on the fact that if you want some code to run when you click on any one of a large number of child elements, you can set the event listener on their parent and have events that happen on them bubble up to their parent, rather than having to set the event listener on every child individually.
  * `submit` event fires when a `<form>` is submitted.
  * `Event.preventDefault()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  * `HTMLFormElement.reset()` method restores a form element's default values.
  * `matches()` method of the `Element` interface returns `true` if the element would be selected by the specified selector string; otherwise, it returns `false`.
  * `HTMLElement.dataset` property provides read/write access to all `data-*` set on the element.
  * Custom checkbox implementation:
```css
/* Setting the `display` property to `none` */
.plates input {
  display: none;
}
```

```css
/* Then changing the `content` property */
.plates input + label:before {
  content: '⬜️';
  margin-right: 10px;
}

.plates input:checked + label:before {
  content: '🌮';
}
```

### [Day 16: CSS Text Shadow Mouse Move Effect](https://github.com/nabrus/JavaScript30/tree/master/16-mouse-move-shadow)
  * `mousemove` event is fired when a pointing device (usually a mouse) is moved while over an element.
  * `MouseEvent.offsetX` read-only property that provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.
  * `MouseEvent.offsetY` read-only property that provides the offset in the Y coordinate of the mouse pointer between that event and the padding edge of the target node.
  * Calculating `offsetX` and `offsetY` values for an element when there is a nested element.
  * `HTMLElement.offsetWidth` read-only property returns the layout width of an element as an integer.
  * `HTMLElement.offsetHeight` read-only property returns the height of an element, including vertical padding and borders, as an integer.
  * Destructuring:
  ```js
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  // Can be authored as... 

  const { offsetWidth: width, offsetHeight: height } = hero;
  ```

### [Day 17: Sorting Band Names without articles](https://github.com/nabrus/JavaScript30/tree/master/17-sort-without-articles)