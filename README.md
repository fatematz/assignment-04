# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**The difference between getElementById, getElementsByClassName, and querySelector/ querySelectorAll is that they are different methods used to select elements from the DOM in different ways.

- getElementById selects a single element using its unique id.

- getElementsByClassName selects multiple elements that share the same class name.

- querySelector selects the first element that matches a CSS selector.

- querySelectorAll selects all elements that match a CSS selector.

---

## 2. How do you create and insert a new element into the DOM?


**To create and insert a new element into the DOM, we use JavaScript methods..

- Create element → createElement()

- Add text → innerText

- Insert into DOM → appendChild() / append()

---

## 3. What is Event Bubbling? And how does it work?

**Event Bubbling is a DOM behavior where an event on a child element automatically moves up to its parent elements.  

- Event happens on child first.

- Then it bubbles up to parent elements.

- It continues to the top (document).

---



## 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events on its child elements. It is useful because it saves memory, improves performance, and works even for child elements that are added dynamically. 

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**The difference between preventDefault() and stopPropagation() is that they are used to control events in different ways.

- preventDefault() -> stops default browser behavior

- stopPropagation() -> stops the event from bubbling up to parent elements.
