## B12-A5-Emergency-Hotline

## Emergency Service Directory

## Answer the following questions clearly:

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## 1. Answer

getElementById
getElementById is used to select an element by a specific ID. Each ID should be unique, so this method returns only one element.
let element = document.getElementById('Id');

## getElementsByClassName

getElementsByClassName is used to select elements by one or more class names. This method returns an HTMLCollection, which is an array-like object containing all the selected elements.

let elements = document.getElementsByClassName('myClass');

ul>

<li>Returns: A collection of zero or more elements. </li>
<li>Usage: When you want to select all elements under a specific class at once.  </li>
</ul>

## querySelector / querySelectorAll

querySelector and querySelectorAll are used to select elements using CSS selectors. This is the most flexible method.

## querySelector

querySelector: It returns the first element that matches the specified CSS selector.

let element = document.querySelector('#myId'); // by ID
let element2 = document.querySelector('.myClass'); // by class
let element3 = document.querySelector('div a'); // by nested element

## querySelectorAll

Returns: A single element.

querySelectorAll: This returns all elements that match the specified CSS selector. This returns a NodeList.

let elements = document.querySelectorAll('.myClass');
let elements2 = document.querySelectorAll('div p');

Returns: A collection of zero or more elements.

Usage: When you want to select elements using a complex pattern like a CSS selector. It can select everything from IDs, classes, tag names, attributes, etc.

Summary
What type of selector does the method return? Usage
getElementById ID When a specific element with a unique ID is needed.
getElementsByClassName Class name HTMLCollection When multiple elements using a specific class are needed.
querySelector CSS selector When the first element is needed that matches the CSS selector.
querySelectorAll CSS selector NodeList When all elements that match the CSS selector are needed.

2.How do you create and insert a new element into the DOM?

## 2.Answer

Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: creating the element.

Use the document.createElement() method, passing the tag name of the element you want to create as a string argument. For example, to create a new paragraph element

3.What is Event Bubbling and how does it work?

## 3.Answer

Event bubbling is an important concept in web development, especially in JavaScript. When an event occurs on an HTML element (such as a click), the event is not limited to that element, but rather propagates upward through its parent elements, a process called "bubbling".

<span> (grandchild): The click event first occurs on the <span> tag.

<p> (child): The event then propagates to its parent <p> tag.

<div> (parent): Finally, the event reaches its parent <div> tag.

Thus, if any of these three tags has an event handler added for the click event, clicking on the grandchild will fire those handlers in turn.

4.What is Event Delegation in JavaScript? Why is it useful?

## 4.Answer

Event delegation is a JavaScript technique where you add a single event handler to the parent element, rather than adding separate event handlers to multiple child elements. It works by taking advantage of event bubbling.

How does it work?
When an event occurs on a child element (such as a click), the event is passed up to the parent element due to event bubbling. In event delegation, the event handler on the parent element catches the event. The event is then identified using the event.target property to determine which child element the event came from and perform the appropriate action.

For example, an unordered list (<ul>) contains multiple list items (<li>). If you want to add a click event to each <li>, using event delegation you don't need to write a separate handler for each <li>.

HTML

<ul id="my-list">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>

<script>
document.getElementById('my-list').addEventListener('click', function(event) {
if (event.target.tagName === 'LI') {
console.log('You clicked on ' + event.target.textContent);
}
});
</script>

In this code, a single click handler is added to the <ul> tag, which will be triggered when any <li> inside it is clicked.

Why is this useful?
Event delegation is very useful for several reasons:

Memory-efficient: When you need to attach events to hundreds or thousands of elements, adding a separate event handler to each element consumes a lot of memory. Event delegation eliminates this problem, because it uses only one handler.

Useful for dynamic elements: If you add or remove new elements with JavaScript (for example, adding new items to a To-Do list), you don't need to add separate event handlers to the newly added elements. Since the handler is on the parent element, it starts working as soon as the new element is added.

Short and clean code: This makes the code much shorter and easier to maintain. Instead of writing separate event handlers for each element, you can do all the handling with a single logic.

5.What is the difference between preventDefault() and stopPropagation() methods?

## 5.Answer

preventDefault() and stopPropagation() — These two methods are very important in event handling in JavaScript, but their functions are completely different.

preventDefault()
This method stops the default behavior of an event. Some HTML elements have their own default actions for certain events. Using the preventDefault() method, you prevent those default actions from happening.

Example:

When a <form> tag is submitted, the browser usually reloads the page. Using event.preventDefault() will stop this reloading.

Clicking on an <a> (anchor) tag usually takes you to the URL of that link. Using event.preventDefault() will stop this default navigation.

stopPropagation()
This method stops event bubbling or event capturing. That is, when an event occurs on an element, it is no longer propagated to its parent elements.

Example:

Suppose there is a <button> inside a <div> . You have added an event handler to the <button> . If you use event.stopPropagation() , then when you click on the <button> , the event handler of the <div> will no longer be executed, because the event has been closed before it reaches it.

Key differences
In short:

preventDefault() - stops the default behavior of the event.

stopPropagation() - stops the propagation of the event.

To remember, preventDefault() means "stop the browser's default behavior", and stopPropagation() means "stop the event from going up again."

## project live link : https://anwarhossen-dev.github.io/B12-A5-Emergency-Hotline
