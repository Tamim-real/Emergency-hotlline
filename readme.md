

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:getElementById() means get an element from document or html by id. 
 On the other hand getElementsByClassName() returns an array like object of child elements which all have same class names. 
querySelector() returns only the first matched element which is assigned by CSS selector.
On the other hand querySelectorAll() returns a Nodelist represents a list of document's elements that matched by CSS selector.



2. How do you **create and insert a new element into the DOM**?

Ans: Firstly I will get the parent container by getElementById() and the I will create an element by document.createElement() then I will insert it by appendChild()

3. What is **Event Bubbling** and how does it work?
  Ans When an event happens on an element the event doesn’t just stay on that element.
 It starts at the target element, and then it “bubbles up” through its parent node. That is called  Event Bubbling. 

 when we click on a button then this event moves to the parent div or element after that it moves to the body of DOM and last it reaches the window, That is how it works

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is e technique where we can work with a singe addEventListener instead of multiple addEventListener with the benefit of  Event Bubbling . It is useful because it keeps the code neat and clean

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: preventDefault()  stops the default action of an element for example  prevents submitting a form , on the other hand stopPropagation() stops the Event Bubbling process


The difference is preventDefault() still keeps  Event Bubbling on the other hand stopPropagation() still keep default action of an element