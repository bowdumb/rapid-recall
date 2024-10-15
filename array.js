const cardArr = [
    {
        question: "What are the three components of a traditional for loop?",
        options: [
            {
                label: "A",
                text: "The Start Condition, the Loop Body, and the End Condition"
            },
            {
                label: "B",
                text: "The Initialization Expression, the Termination Condition, and the Final Expression"
            },
            {
                label: "C",
                text: "The Initialization Phase, the Processing Phase, and the Termination Phase"
            },
            {
                label: "D",
                text: "The Declaration Statement, the Execution Block, and the Iteration Variable"
            }
        ],
        correctAnswerLabel: "B",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"
    },
    {
        question: "What does Array.prototype.push() do?",
        options: [
            {
                label: "A",
                text: "It adds one or more elements to the end of an array and returns the new length of the array."
            },
            {
                label: "B",
                text: "It merges two or more arrays into a single array and returns the new combined array."
            },
            {
                label: "C",
                text: "It removes the last element from an array and returns that element."
            },
            {
                label: "D",
                text: "It adds one or more elements to the beginning of an array and returns the new length of the array."
            }
        ],
        correctAnswerLabel: "A",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
    },
    {
        question: "What does Array.prototype.shift() do?",
        options: [
            {
                label: "A",
                text: "It joins all elements of an array into a string and returns the resulting string."
            },
            {
                label: "B",
                text: "It removes the last element from an array and returns that removed element."
            },
            {
                label: "C",
                text: "It removes the first element from an array and returns that removed element."
            },
            {
                label: "D",
                text: "It sorts the elements of an array in place and returns the sorted array."
            }
        ],
        correctAnswerLabel: "C",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
    },
    {
        question: "What does Array.prototype.unshift() do?",
        options: [
            {
                label: "A",
                text: "It removes the first element from an array and returns that removed element."
            },
            {
                label: "B",
                text: "It adds one or more elements to the end of an array and returns the new length of the array."
            },
            {
                label: "C",
                text: "It removes the last element from an array and returns that removed element."
            },
            {
                label: "D",
                text: "It adds one or more elements to the beginning of an array and returns the new length of the array."
            }
        ],
        correctAnswerLabel: "D",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
    },
    {
        question: "What does Array.prototype.pop() do?",
        options: [
            {
                label: "A",
                text: "It removes the last element from an array and returns that element."
            },
            {
                label: "B",
                text: "It adds one or more elements to the beginning of an array and returns the new length of the array."
            },
            {
                label: "C",
                text: "It removes the first element from an array and returns that element."
            },
            {
                label: "D",
                text: "It adds one or more elements to the end of an array and returns the new length of the array."
            }
        ],
        correctAnswerLabel: "A",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
    },
    {
        question: "What is a multi-dimensional array?",
        options: [
            {
                label: "A",
                text: "An array that has multiple indexes for each element, enabling faster data retrieval."
            },
            {
                label: "B",
                text: "An array that can hold multiple data types in a single array."
            },
            {
                label: "C",
                text: "An array that automatically adjusts its size when elements are added or removed."
            },
            {
                label: "D",
                text: "An array that contains arrays as its elements, allowing for nested data structures."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What is an algorithm?",
        options: [
            {
                label: "A",
                text: "A data structure that stores information in key-value pairs."
            },
            {
                label: "B",
                text: "A programming language used for developing web applications."
            },
            {
                label: "C",
                text: "A hardware component that increases the processing speed of a computer."
            },
            {
                label: "D",
                text: "A step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What does DOM stand for, and what is its purpose in web development?",
        options: [
            {
                label: "A",
                text: "Digital Optimization Method; it improves the efficiency of algorithms."
            },
            {
                label: "B",
                text: "Data Output Module; it manages the output of data in a program."
            },
            {
                label: "C",
                text: "Document Object Model; it is a programming interface that allows scripts to update the content, structure, and style of a document dynamically."
            },
            {
                label: "D",
                text: "Distributed Object Management; it handles resources in a network."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is decomposition in problem-solving?",
        options: [
            {
                label: "A",
                text: "Removing unnecessary components to streamline a process."
            },
            {
                label: "B",
                text: "Breaking down a complex problem or system into smaller, more manageable parts."
            },
            {
                label: "C",
                text: "Identifying patterns to predict future outcomes."
            },
            {
                label: "D",
                text: "Combining multiple simple elements to form a complex system."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is pattern recognition in computer science?",
        options: [
            {
                label: "A",
                text: "Encrypting data to secure it from unauthorized access."
            },
            {
                label: "B",
                text: "Identifying and analyzing recurring themes, trends, or regularities in data."
            },
            {
                label: "C",
                text: "Breaking down a complex problem into smaller parts."
            },
            {
                label: "D",
                text: "Testing software to find and fix bugs."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is the spread operator in JavaScript?",
        options: [
            {
                label: "A",
                text: "An operator that duplicates the properties of an object."
            },
            {
                label: "B",
                text: "An operator that allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected."
            },
            {
                label: "C",
                text: "An operator that merges two or more objects into one."
            },
            {
                label: "D",
                text: "An operator that creates a new function with a given 'this' value."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does the array method arr.join() do?",
        options: [
            {
                label: "A",
                text: "It merges two or more arrays into one."
            },
            {
                label: "B",
                text: "It splits a string into an array of substrings."
            },
            {
                label: "C",
                text: "It combines all elements of an array into a string, separated by a specified separator."
            },
            {
                label: "D",
                text: "It adds a new element to the end of an array."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What does arr.includes(valueToFind) do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It adds the specified value to the array if it doesn't already exist."
            },
            {
                label: "B",
                text: "It checks if the array includes the specified value and returns a boolean."
            },
            {
                label: "C",
                text: "It removes the specified value from the array."
            },
            {
                label: "D",
                text: "It returns the index of the specified value in the array."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does arr.indexOf(value) do?",
        options: [
            {
                label: "A",
                text: "It removes the element at the specified index from the array."
            },
            {
                label: "B",
                text: "It checks if the array includes the specified value and returns a boolean."
            },
            {
                label: "C",
                text: "It returns the index of the first occurrence of the specified value in the array, or -1 if not found."
            },
            {
                label: "D",
                text: "It adds a new element to the beginning of the array."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "In JavaScript objects, what are properties?",
        options: [
            {
                label: "A",
                text: "Functions that belong to an object, defining its behavior."
            },
            {
                label: "B",
                text: "Variables that belong to an object, representing its characteristics."
            },
            {
                label: "C",
                text: "Objects that inherit from another object."
            },
            {
                label: "D",
                text: "Event handlers attached to DOM elements."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What are methods in JavaScript objects?",
        options: [
            {
                label: "A",
                text: "Built-in JavaScript functions."
            },
            {
                label: "B",
                text: "Variables that belong to an object."
            },
            {
                label: "C",
                text: "Functions that belong to an object, representing actions that can be performed on or by the object."
            },
            {
                label: "D",
                text: "Properties inherited from the object's prototype."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is an object literal in JavaScript?",
        options: [
            {
                label: "A",
                text: "An object created using the new Object() constructor."
            },
            {
                label: "B",
                text: "An instance of a class created using the class keyword."
            },
            {
                label: "C",
                text: "A way to define an object using a comma-separated list of key-value pairs inside curly braces."
            },
            {
                label: "D",
                text: "An object that is immutable and cannot be changed after creation."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What do Object.keys() and Object.values() methods do?",
        options: [
            {
                label: "A",
                text: "Object.keys() and Object.values() convert an object into a JSON string."
            },
            {
                label: "B",
                text: "Object.keys() returns an array of an object's property names, and Object.values() returns an array of the object's property values."
            },
            {
                label: "C",
                text: "Object.keys() checks if an object has a specific property, and Object.values() deletes a property from an object."
            },
            {
                label: "D",
                text: "Object.keys() and Object.values() merge two objects into one."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is a for...in loop in JavaScript, and how do you structure it?",
        options: [
            {
                label: "A",
                text: "A loop that iterates over the values of an array. Structured as: for (let value of array) { /* code */ }"
            },
            {
                label: "B",
                text: "A loop that iterates over the enumerable properties of an object. Structured as: for (let key in object) { /* code */ }"
            },
            {
                label: "C",
                text: "A loop that runs a specified number of times. Structured as: for (let i = 0; i < limit; i++) { /* code */ }"
            },
            {
                label: "D",
                text: "A loop that iterates over the keys and values of a Map object."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "Which methods are used to add nodes to the beginning or end of a parent node's list of children in the DOM?",
        options: [
            {
                label: "A",
                text: "insertBefore() and insertAfter() methods"
            },
            {
                label: "B",
                text: "push() and unshift() methods"
            },
            {
                label: "C",
                text: "append() and prepend() methods"
            },
            {
                label: "D",
                text: "addChild() and insertChild() methods"
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What does the method element.insertAdjacentHTML(position, html) do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It replaces the inner HTML of an element with new HTML content."
            },
            {
                label: "B",
                text: "It removes the element from the DOM."
            },
            {
                label: "C",
                text: "It inserts a new element before the specified element."
            },
            {
                label: "D",
                text: "It parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position relative to the element."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What is a function in JavaScript?",
        options: [
            {
                label: "A",
                text: "A variable that holds a single value."
            },
            {
                label: "B",
                text: "An event that occurs when a user clicks a button."
            },
            {
                label: "C",
                text: "A block of code designed to perform a particular task, executed when it is called or invoked."
            },
            {
                label: "D",
                text: "A loop that iterates over an array."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is a callback function in JavaScript?",
        options: [
            {
                label: "A",
                text: "A function that returns another function."
            },
            {
                label: "B",
                text: "A function passed into another function as an argument, which is then invoked inside the outer function."
            },
            {
                label: "C",
                text: "A function that executes immediately after it is defined."
            },
            {
                label: "D",
                text: "A function that calls itself."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is a recursive function in programming?",
        options: [
            {
                label: "A",
                text: "A function that is called only once."
            },
            {
                label: "B",
                text: "A function that calls itself during its execution."
            },
            {
                label: "C",
                text: "A function that returns multiple values."
            },
            {
                label: "D",
                text: "A function that runs indefinitely."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is event bubbling in JavaScript?",
        options: [
            {
                label: "A",
                text: "A technique to clone event listeners."
            },
            {
                label: "B",
                text: "A method where an event propagates from the outermost element (document) down to the target element."
            },
            {
                label: "C",
                text: "A way to prevent an event from occurring."
            },
            {
                label: "D",
                text: "A method where an event propagates from the innermost target element (children) up through its ancestors."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What is event capturing in JavaScript?",
        options: [
            {
                label: "A",
                text: "An event propagation method where the event moves from the outermost element (document) down to the target element."
            },
            {
                label: "B",
                text: "An event propagation method where the event moves from the target element up through its ancestors."
            },
            {
                label: "C",
                text: "A method to stop an event from bubbling."
            },
            {
                label: "D",
                text: "A technique to bind multiple events to a single element."
            }
        ],
        correctAnswerLabel: "A"
    },
    {
        question: "What does AJAX stand for, and what is it used for?",
        options: [
            {
                label: "A",
                text: "Asynchronous JavaScript and XML; it is used for updating web pages asynchronously by exchanging data with a server behind the scenes."
            },
            {
                label: "B",
                text: "Advanced JSON and XML; it is used for data storage."
            },
            {
                label: "C",
                text: "Automated Java Application eXchange; it is used for integrating Java applications."
            },
            {
                label: "D",
                text: "Asynchronous JavaScript and XHTML; it is used for styling web pages."
            }
        ],
        correctAnswerLabel: "A"
    },
    {
        question: "Who coined the term AJAX, and what is its technical/official name?",
        options: [
            {
                label: "A",
                text: "Brendan Eich; the technical name is Synchronous JavaScript and XML."
            },
            {
                label: "B",
                text: "Tim Berners-Lee; the technical name is Dynamic HTML."
            },
            {
                label: "C",
                text: "Douglas Crockford; the technical name is JavaScript Object Notation."
            },
            {
                label: "D",
                text: "Jesse James Garrett; the technical name is Asynchronous JavaScript and XML."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What are the four basic steps required to set up and send an AJAX request?",
        options: [
            {
                label: "A",
                text: "1. Include the AJAX library; 2. Initialize the server; 3. Process the response; 4. Close the connection."
            },
            {
                label: "B",
                text: "1. Create a database; 2. Write SQL queries; 3. Fetch data; 4. Display data."
            },
            {
                label: "C",
                text: "1. Create the XMLHttpRequest object; 2. Define a callback function; 3. Open the request; 4. Send the request."
            },
            {
                label: "D",
                text: "1. Install Node.js; 2. Set up a server; 3. Write server-side code; 4. Deploy the application."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What does XML stand for?",
        options: [
            {
                label: "A",
                text: "Extensible Markup Language"
            },
            {
                label: "B",
                text: "Executable Multiple Language"
            },
            {
                label: "C",
                text: "Extended Machine Learning"
            },
            {
                label: "D",
                text: "Example Modeling Language"
            }
        ],
        correctAnswerLabel: "A"
    },
    {
        question: "What is CORS in web development?",
        options: [
            {
                label: "A",
                text: "Client-Oriented Rendering System; a method for optimizing web pages."
            },
            {
                label: "B",
                text: "Cross-Origin Resource Sharing; a mechanism that allows restricted resources on a web page to be requested from another domain."
            },
            {
                label: "C",
                text: "Content Originality and Reusability Standards; guidelines for web content."
            },
            {
                label: "D",
                text: "Cascading Object Rendering Style; a styling framework."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is JSONP in the context of web development?",
        options: [
            {
                label: "A",
                text: "JavaScript Object Notation Protocol; a communication protocol."
            },
            {
                label: "B",
                text: "Justified Sequence of Network Packets; a data transmission method."
            },
            {
                label: "C",
                text: "JavaScript Over Network Protocol; a networking standard."
            },
            {
                label: "D",
                text: "JSON with Padding; a technique used to request data from a server residing in a different domain than the client."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What is JSON, and what does it stand for?",
        options: [
            {
                label: "A",
                text: "Java Standard Output Network; a debugging tool."
            },
            {
                label: "B",
                text: "Just Some Object Notation; a placeholder term."
            },
            {
                label: "C",
                text: "JavaScript Oriented Network; a protocol for web services."
            },
            {
                label: "D",
                text: "JavaScript Object Notation; a lightweight data-interchange format."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What does the array method arr.map() do?",
        options: [
            {
                label: "A",
                text: "It filters the array based on a condition."
            },
            {
                label: "B",
                text: "It creates a new array populated with the results of calling a provided function on every element in the calling array."
            },
            {
                label: "C",
                text: "It sorts the elements of an array."
            },
            {
                label: "D",
                text: "It finds the index of a specified element."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does arr.join(separator) do?",
        options: [
            {
                label: "A",
                text: "It combines two arrays into one."
            },
            {
                label: "B",
                text: "It joins all elements of an array into a string, separated by the specified separator."
            },
            {
                label: "C",
                text: "It splits a string into an array of substrings."
            },
            {
                label: "D",
                text: "It removes and returns the last element of an array."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does arr.find(callback) do?",
        options: [
            {
                label: "A",
                text: "It returns the index of a specified element."
            },
            {
                label: "B",
                text: "It returns the value of the first element in the array that satisfies the provided testing function."
            },
            {
                label: "C",
                text: "It checks if a value exists in the array and returns a boolean."
            },
            {
                label: "D",
                text: "It creates a new array with all elements that pass a test."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does arr.sort() do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It creates a new sorted array without modifying the original."
            },
            {
                label: "B",
                text: "It shuffles the elements of an array randomly."
            },
            {
                label: "C",
                text: "It sorts the elements in descending order only."
            },
            {
                label: "D",
                text: "It sorts the elements of an array in place and returns the array."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What does arr.filter(callback) do?",
        options: [
            {
                label: "A",
                text: "It reverses the elements of an array."
            },
            {
                label: "B",
                text: "It combines all elements of an array into a string."
            },
            {
                label: "C",
                text: "It creates a new array with all elements that pass the test implemented by the provided function."
            },
            {
                label: "D",
                text: "It finds the first element that satisfies the provided testing function."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What does document.createTextNode(text) do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It creates a new Element node with the given tag name."
            },
            {
                label: "B",
                text: "It replaces the content of an element with the specified text."
            },
            {
                label: "C",
                text: "It deletes a Text node from the document."
            },
            {
                label: "D",
                text: "It creates a new Text node containing the specified text."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What does the string method str.split(separator) do?",
        options: [
            {
                label: "A",
                text: "It trims whitespace from both ends of a string."
            },
            {
                label: "B",
                text: "It splits a string into an array of substrings, using the specified separator."
            },
            {
                label: "C",
                text: "It replaces occurrences of a substring with a new string."
            },
            {
                label: "D",
                text: "It combines multiple strings into one."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does arr.reverse() do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It creates a new array with the elements in reverse order."
            },
            {
                label: "B",
                text: "It reverses the elements of an array in place."
            },
            {
                label: "C",
                text: "It sorts the array in descending order."
            },
            {
                label: "D",
                text: "It returns a reversed copy of the array without modifying the original."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is optional chaining (?.) in JavaScript, and when is it used?",
        options: [
            {
                label: "A",
                text: "An operator that checks for the existence of a variable."
            },
            {
                label: "B",
                text: "A syntax that allows you to access nested object properties without having to check each reference; used to prevent errors when a property is undefined or null."
            },
            {
                label: "C",
                text: "A way to concatenate strings conditionally."
            },
            {
                label: "D",
                text: "A method to chain multiple promises together."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What does the indexOf() method do in JavaScript?",
        options: [
            {
                label: "A",
                text: "It adds an element at a specified index."
            },
            {
                label: "B",
                text: "It checks if an array includes a certain value and returns a boolean."
            },
            {
                label: "C",
                text: "It removes the element at the specified index."
            },
            {
                label: "D",
                text: "It returns the index of the first occurrence of a specified value in a string or array, or -1 if not found."
            }
        ],
        correctAnswerLabel: "D"
    },
    {
        question: "What are unary operators in JavaScript?",
        options: [
            {
                label: "A",
                text: "Operators that compare three values at once."
            },
            {
                label: "B",
                text: "Operators that only work with boolean values."
            },
            {
                label: "C",
                text: "Operators that operate on a single operand to produce a result."
            },
            {
                label: "D",
                text: "Operators that combine two values."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is a while loop in JavaScript?",
        options: [
            {
                label: "A",
                text: "A loop that iterates over the properties of an object."
            },
            {
                label: "B",
                text: "A loop that executes a block of code as long as a specified condition evaluates to true."
            },
            {
                label: "C",
                text: "A loop that executes a block of code at least once before checking the condition."
            },
            {
                label: "D",
                text: "A loop that executes a block of code a specific number of times."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is a forEach loop in JavaScript?",
        options: [
            {
                label: "A",
                text: "A method that executes a provided function once for each array element."
            },
            {
                label: "B",
                text: "A loop that iterates over the properties of an object."
            },
            {
                label: "C",
                text: "A loop that executes a block of code as long as a specified condition is true."
            },
            {
                label: "D",
                text: "A loop that executes a block of code a specific number of times."
            }
        ],
        correctAnswerLabel: "A"
    },
    {
        question: "What is a for...of loop in JavaScript?",
        options: [
            {
                label: "A",
                text: "A loop that executes a block of code as long as a specified condition is true."
            },
            {
                label: "B",
                text: "A loop that iterates over iterable objects such as arrays, maps, and strings, retrieving the values of each element."
            },
            {
                label: "C",
                text: "A loop that iterates over the properties of an object."
            },
            {
                label: "D",
                text: "A loop that executes a block of code a specific number of times."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "When should you consider using a for...in loop in JavaScript?",
        options: [
            {
                label: "A",
                text: "When you need to execute a block of code as long as a specified condition is true."
            },
            {
                label: "B",
                text: "When you need to iterate over the keys of an object."
            },
            {
                label: "C",
                text: "When you need to execute a block of code a specific number of times."
            },
            {
                label: "D",
                text: "When you need to iterate over the values of an array or iterable object."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is a constructor function in JavaScript?",
        options: [
            {
                label: "A",
                text: "A function that immediately invokes itself."
            },
            {
                label: "B",
                text: "A function used to create new objects and set up their properties and methods."
            },
            {
                label: "C",
                text: "An object that holds methods for mathematical operations."
            },
            {
                label: "D",
                text: "A built-in method for combining arrays."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "How do you create a new object using a constructor function in JavaScript?",
        options: [
            {
                label: "A",
                text: "By using the 'new' keyword followed by the constructor function."
            },
            {
                label: "B",
                text: "By calling the constructor function directly."
            },
            {
                label: "C",
                text: "By assigning the constructor to a variable."
            },
            {
                label: "D",
                text: "By using the 'Object.create()' method."
            }
        ],
        correctAnswerLabel: "A"
    },
    {
        question: "What is a switch statement in JavaScript?",
        options: [
            {
                label: "A",
                text: "An event handler for responding to user inputs."
            },
            {
                label: "B",
                text: "A function that immediately invokes itself."
            },
            {
                label: "C",
                text: "A control statement that executes a block of code based on the value of a variable or expression, matching against multiple possible cases."
            },
            {
                label: "D",
                text: "A loop that executes as long as a specified condition is true."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is object destructuring in JavaScript, and why is it used?",
        options: [
            {
                label: "A",
                text: "A way to remove properties from an object."
            },
            {
                label: "B",
                text: "A process to clone an object."
            },
            {
                label: "C",
                text: "A syntax that allows you to extract properties from objects and bind them to variables."
            },
            {
                label: "D",
                text: "A method to convert an object into a string."
            }
        ],
        correctAnswerLabel: "C"
    },
    {
        question: "What is a modal in web development?",
        options: [
            {
                label: "A",
                text: "A programming paradigm based on objects."
            },
            {
                label: "B",
                text: "A graphical control element that forces the user to interact with it before returning to the parent application."
            },
            {
                label: "C",
                text: "A special variable that holds multiple values."
            },
            {
                label: "D",
                text: "A type of function that operates on other functions."
            }
        ],
        correctAnswerLabel: "B"
    },
    {
        question: "What is a Higher-Order Function in JavaScript?",
        options: [
            {
                label: "A",
                text: "A function that is executed immediately after it is defined."
            },
            {
                label: "B",
                text: "A function that can only be called once."
            },
            {
                label: "C",
                text: "A function that returns another function or takes one or more functions as arguments."
            },
            {
                label: "D",
                text: "A function that calls itself during execution."
            }
        ],
        correctAnswerLabel: "C"
    }
];

export default cardArr;