![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

### Index of Each Day
With a list of highlights, definitions, sample code, etc.

### [Day 1: JavaScript Drum Kit](https://github.com/nabrus/JavaScript30/tree/master/01-js-drum-kit)
  * The **data-*** global attributes form a class of attributes called **custom data attributes**, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
  * The `Element.classList` is a read-only property that returns a live `DOMTokenList` collection of the class attributes of the element.
  *  with the `add(..)` method.
  * `KeyboardEvent` objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard. The event type (`keydown`, `keypress`, or `keyup`) identifies what kind of keyboard activity occurred. 
  * `keydown` event is fired when a key is pressed.
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
  * Setting a *flag* variable. Toggling between `true` and `false` boolean.
    * **flag** variable— it's defined to have one value until some condition is true. Then you change the variable's value. Used to control the flow of a function or statement, allowing to check for certain condition while the function progresses.

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
  * The read-only `HTMLMediaElement.paused` property tells whether the media element is paused.
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
  * `String.prototype.replace()` method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a string or a `RegExp`, and the `replacement` can be a string or a function to be called for each match. If `pattern` is a string, only the first occurrence will be replaced.
  * `String.prototype.trim()` method removes whitespace from both ends of a string.
  * `Array.prototype.sort()` method sorts the elements of an array in place and returns the array.

### [Day 18: Tally String Times with Reduce](https://github.com/nabrus/JavaScript30/tree/master/18-adding-up-times-with-reduce)
  * Creating an array directly on selected HTML elements by wrapping it in `Array.from(..)`.
  * `parseFloat()` function parses an argument and returns a floating point number.
  * Passing in `parseFloat()` directly as the callback for `map()`. 
  * `Math.floor()` function returns the largest integer less than or equal to a given number.
  * Remainder (`%`) — The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

### [Day 19: Unreal Webcam Fun](https://github.com/nabrus/JavaScript30/tree/master/19-webcam-fun)
  * `Navigator.mediaDevices` read-only property returns a `MediaDevices` object, which provides access to connected media input devices like cameras and microphones, as well as screen sharing.
  * `MediaDevices.getUserMedia()` method prompts the user for permission to use a media input which produces a `MediaStream` with tracks containing the requested types of media. That stream can include, for example, a video track (produced by either a hardware or virtual video source such as a camera, video recording device, screen sharing service, and so forth), an audio track (similarly, produced by a physical or virtual audio source like a microphone, A/D converter, or the like), and possibly other track types. It returns a `Promise` that resolves to a `MediaStream` object. If the user denies permission, or matching media is not available, then the promise is rejected with `NotAllowedError` or `NotFoundError` respectively. Generally, you will access the `MediaDevices` singleton object using `navigator.mediaDevices`.
  * `HTMLMediaElement.srcObject` property of the `HTMLMediaElement` interface sets or returns the object which serves as the source of the media associated with the `HTMLMediaElement`. The object can be a `MediaStream`, a `MediaSource`, a `Blob`, or a `File` (which inherits from `Blob`).
  * `setInterval()` method, offered on the `Window` and `Worker` interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. It returns an interval ID which uniquely identifies the interval, so you can remove it later by calling `clearInterval()`.
  * `CanvasRenderingContext2D.drawImage()` method of the Canvas 2D API provides different ways to draw an image onto the canvas.
  * `CanvasRenderingContext2D` method `getImageData()` of the Canvas 2D API returns an `ImageData` object representing the underlying pixel data for a specified portion of the canvas.
  * `CanvasRenderingContext2D.putImageData()` method of the Canvas 2D API paints data from the given ImageData object onto the canvas.
  * `HTMLMediaElement.currentTime` property gives the current playback time in seconds. Setting this value seeks the media to the new time.
  * `HTMLMediaElement: canplay` event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content. 
  * `HTMLCanvasElement.toDataURL()` method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG).
  * **Base64** is a group of similar *binary-to-text encoding* schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation.
  * `Element.setAttribute()` sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
  * The `download` instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
  * `Node.insertBefore()` method inserts a node before the reference node as a child of a specified parent node.

### [Day 20: Native Speech Recognition](https://github.com/nabrus/JavaScript30/tree/master/20-speech-detection)
  * `SpeechRecognition` interface of the Web Speech API is the controller interface for the recognition service; this also handles the `SpeechRecognitionEvent` sent from the recognition service.
  * `SpeechRecognition()` constructor creates a new `SpeechRecognition` object instance. `const myRecognition = new SpeechRecognition();`
  * `SpeechRecognition.interimResults` property controls whether interim results should be returned `true` or `false`. Set to `true` and it gives results as you speak, `false` shows when your done speaking.
  * `SpeechRecognition.start()` starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.
  * `end` fired when the speech recognition service has disconnected.

### [Day 21: Geolocation based Speedometer and Compass](https://github.com/nabrus/JavaScript30/tree/master/21-geolocation)
  * Use of **Xcode** to run a Browsersync localhost through the iPhone simulator.
  * The **Geolocation API** allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information. This API is published through the `navigator.geolocation` object.
  * `Navigator.geolocation` read-only property returns a `Geolocation` object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location. Again, for security reasons, when a web page tries to access location information, the user is notified and asked to grant permission.
  * The `watchPosition()` method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function. This method returns a watch ID value that then can be used to unregister the handler by passing it to the `Geolocation.clearWatch()` method.

### [Day 22: Follow Along Links](https://github.com/nabrus/JavaScript30/tree/master/22-follow-along-link-highlighter)
  * `Element.getBoundingClientRect()` method returns the size of an element and its position relative to the viewport.
  ```js
  // Output Example
  DOMRect {x: 379.671875, y: 58, width: 133.59375, height: 28, top: 58, …}
    bottom: 86
    height: 28
    left: 379.671875
    right: 513.265625
    top: 58
    width: 133.59375
    x: 379.671875
    y: 58
    __proto__: DOMRect
  ```
  * Using the returned `DOMRect` object and applying it's values to inline styles.
  * `transform` **CSS** property lets you rotate, scale, skew, or translate an element.
  * `translate()` **CSS** function repositions an element in the horizontal and/or vertical directions. Its result is a `<transform-function>` data type.
  * `mouseenter` event is fired when a pointing device (usually a mouse) is moved over the element that has the listener attached. 

### [Day 23: Speech Synthesis](https://github.com/nabrus/JavaScript30/tree/master/23-speech-synthesis)
  * The `SpeechSynthesis` interface of the **Web Speech API** is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
  * The `SpeechSynthesisUtterance` interface of the **Web Speech API** represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
  * `Speech​Synthesis​.speak()` adds an *utterance* to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.
  * The `voiceschanged` event of the **Web Speech API** is fired when the list of `SpeechSynthesisVoice` objects that would be returned by the `SpeechSynthesis.getVoices()` method has changed (when the `voiceschanged` event fires.)
  * `Speech​Synthesis​.get​Voices()` method returns a list of `SpeechSynthesisVoice` objects representing all the available voices on the current device.
  * The **HTML `<option>` element** is used to define an item contained in a `<select>`, an `<optgroup>`, or a `<datalist>` element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.
  * The `change` event is fired for `<input>`, `<select>`, and `<textarea>` elements when an alteration to the element's value is committed by the user. Unlike the `input` event, the `change` event is not necessarily fired for each alteration to an element's `value`.
  * `Function​.prototype​.bind()` method creates a new function that, when called has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### [Day 24: Sticky Nav](https://github.com/nabrus/JavaScript30/tree/master/24-sticky-nav)
  * Biggest take-away, adjusting for the extra space left when setting the nav to `position: fixed;` for a smooth scroll without screen jerk.
  * `HTMLElement.offsetTop` read-only property returns the distance of the current element relative to the top of the `offsetParent` node.
  * `HTMLElement.offsetHeight` read-only property returns the height of an element, including vertical padding and borders, as an integer.

### [Day 25: Event Capture, Propagation, Bubbling and Once](https://github.com/nabrus/JavaScript30/tree/master/25-event-capture%2Cpropagation%2Cbubbling-and-once)
  * **Event Capture** - When an event is fired the browser checks to see if the element's outer-most ancestor has that event. If it does the handler runs. It then moves on to the next element inside, then the next one inside of that and so on *capturing* those events and running the handler on each until it reaches the element that actually fired the event. 
  * **Event Bubbling** - After the browser goes through it's capture flow phase and the options object `{ capture: false }` (the default) is set, the events  propagate in the opposite direction. Starting at the element that the event fired on if it has the handler registered on it. From there it moves to the next immediate ancestor element and so on *bubbling* all the way up. Checking for and running the event handler.
  * `Element.classList` is a read-only property that returns a live `DOMTokenList` collection of the class attributes of the element.
  * The `stopPropagation()` method of the `Event` interface prevents further propagation of the current event in the capturing and bubbling phases.
  * `addEventListener()` parameter `once:` A `Boolean` indicating that the `listener` should be invoked at most once after being added. If `true`, the `listener` would be automatically removed when invoked.

### [Day 26: Stripe Follow Along Dropdown](https://github.com/nabrus/JavaScript30/tree/master/26-stripe-follow-along-nav)
  * Using a two stage method to display the hidden elements. First set `display: block;` then `opacity: 1;`. Enables a smooth transition and setting the correct page coordinates.
  * `Element.getBoundingClientRect()` method returns the size of an element and its position relative to the viewport. 
  * `mouseenter` event is fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.
  * `mouseleave` event is fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
  * Using an arrow function, `(params) => { statement };`, within a function to take advantage of it not having its own `this`. The value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules.

### [Day 27: Click and Drag to Scroll](https://github.com/nabrus/JavaScript30/tree/master/27-click-and-drag)
  * Capturing variables during the `mousedown` event then referencing them later when `mousemove` event is fired.
  * Using a *flag* variable— it's defined to have one value until some condition is true. Then you change the variable's value. Used to control the flow of a function or statement, allowing to check for certain condition while the function progresses.
  * `mousedown` event is fired when a pointing device button is pressed on an element.
  * `mouseup` event is fired when a pointing device button is released over an element.
  * `mousemove` event is fired when a pointing device (usually a mouse) is moved while over an element.
  * `mouseleave` event is fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.
  * The `pageX` read-only property of the `MouseEvent` interface returns the X (horizontal) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document. This includes any portion of the document not currently visible.
  * `HTMLElement.offsetLeft` read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the `HTMLElement.offsetParent` node.
    * `HTMLElement.offsetParent` read-only property returns a reference to the object which is the closest (nearest in the containment hierarchy) positioned containing element. 
  * `Event​.prevent​Default()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  * The `Element.scrollLeft` property gets or sets the number of pixels that an element's content is scrolled from its left edge.

### [Day 28: Video Speed Controller UI](https://github.com/nabrus/JavaScript30/tree/master/28-video-speed-controller)
  * Calculating the height of the slider bar and attaching the playback rate.
  * `mousemove` event is fired when a pointing device (usually a mouse) is moved while over an element.
  * The `pageY` read-only property of the MouseEvent interface returns the Y (vertical) coordinate in pixels of the event relative to the whole document. This property takes into account any vertical scrolling of the page.
  * `HTMLElement.offsetTop` read-only property returns the distance of the current element relative to the top of the `offsetParent` node.
  * `Number​.prototype​.toFixed([digits])` method formats a number using fixed-point notation.
  * `HTMLMediaElement.playbackRate` property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

### [Day 29: Countdown Clock](https://github.com/nabrus/JavaScript30/tree/master/29-countdown-timer)
  * `new Date(..)` creates a JavaScript `Date` instance that represents a single moment in time. Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.
  * The `Date.now()` method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
  * The `parseInt()` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
  * `setInterval()` method, offered on the `Window` and `Worker` interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
  * `Date.prototype.getHours()` method returns the hour for the specified date, according to local time.
  * `Date.prototype.getMinutes()` method returns the minutes in the specified date according to local time.
  * HTML `name` attributes can be referenced in JS without the need to select them. For example see `document.customForm.addEventListener(..)`.
  * The `dataset` property on the `HTMLElement` interface provides read/write access to all the custom data attributes (data-*) set on the element. This access is available both in HTML and within the DOM.


### [Day 30: Whack A Mole Game](https://github.com/nabrus/JavaScript30/tree/master/30-whack-a-mole)
  * Using a *flag* variable— it's defined to have one value until some condition is true. Then you change the variable's value. Used to control the flow of a function or statement, allowing to check for certain condition while the function progresses.
  * `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.
  * `Event​.isTrusted` is a read-only property that is a Boolean which is true when the event was generated by a user action, and false when the event was created or modified by a script or dispatched via `EventTarget.dispatchEvent()`.




