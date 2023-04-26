// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
h1.textContent = 'My Activities List';

// 2: Set the color of the <h1> to a different color
h1.style.color = "purple";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.textContent = "Select an activity";
desc.style.fontWeight = "bold";

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector("ul");
ul.setAttribute('class', 'list');

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.innerHTML = '<input> Eat';
ul.append(li);

// 6: Change all <input> elements from text fields to checkboxes
const inputs = document.querySelectorAll('input');
for (const input of inputs) {
  input.setAttribute('type', 'checkbox');
};

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = "Delete";
const extra = document.querySelector('.extra');
extra.insertAdjacentElement('afterbegin', button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener('click', () => {
  extra.remove();
});
