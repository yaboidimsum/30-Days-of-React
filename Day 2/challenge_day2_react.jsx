// Exercises: What is React?
// 1. What is React?
// React is a Framework for building user interfaces. It is a JavaScript library created by Facebook. It is used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook's newsfeed in 2011 and on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.
// 2. What is a library?
// Library is a collection of functions which are reusable. It is a reusable piece of code which we can use in our applications. It is a collection of functions, objects, and classes. We
// 3. What is a single page application?
// Single page application is a web application that fits on a single page. It is a web application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.
// 4. What is a component ?
// Component is a reusable piece of code which we can use in our applications. It is a collection of functions, objects, and classes. We can create a component for a button, header, footer, sidebar, etc. We can use the same component over and over again.
// 5. What is the latest version of React?
// The latest version of React is 16.13.1. It was released on March 19, 2020.
// 6. What is DOM?
// DOM is Document Object Model. It is a tree-like structure that represents the HTML of a webpage. It is a programming interface for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. It is a programming interface for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. It is a tree-like structure that represents the HTML of a webpage.
// 7. What is React Virtual DOM?
// React Virtual DOM is a light-weight copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React's render function creates a node tree out of the React components. It updates the DOM to match the React components. It is a light-weight copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties.
// 8. What does a web application or a website(composed of) have?
// A web application or a website is composed of HTML, CSS, and JavaScript. HTML is used for the structure of the web page. CSS is used for styling the web page. JavaScript is used for adding functionality to the web page.

// Exercises: Why React?
// 1. Why did you chose to use react?
// Popular, fast, efficient, reusable, easy to learn, easy to use, easy to scale, component based, etc.
// 2. What measures do you use to know popularity ?
// Google trends, stackoverflow, github, etc.
// 3. What is more popular, React or Vue ?
// React is more popular than Vue.

// Exercises: JSX
// 1. What is an HTML element?
// HTML element is a collection of tags and content between them. It is everything from the start tag to the end tag. It is everything from the start tag to the end tag. It is a collection of tags and content between them.
// 2. How to write a self closing HTML element?
// <br />, <hr />, <img />, <input />, <link />, <meta />, <param />, <source />, <wbr />
// 3. What is an HTML attribute? Write some of them
// HTML attribute is a special word used inside the start tag to control the element's behaviour. It is used to provide additional information about the HTML elements. It is a special word used inside the start tag to control the element's behaviour. It is used to provide additional information about the HTML elements. It is used to provide additional information about the HTML elements.
// Examples: id, class, style, src, alt, href, title, width, height, colspan, rowspan, etc.
// 4. What is JSX?
// JSX is basically a syntax extension of JavaScript. It is used to write HTML elements inside JavaScript and React components. It is a syntax extension of JavaScript. It is used to write HTML elements inside JavaScript and React components. It is used to write HTML elements inside JavaScript and React components.
// 5. What is babel?
// Babel is a JavaScript compiler. It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It is a JavaScript compiler. It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
// 6. What is a transpiler?
// Transpiler is a tool that converts source code from one programming language to another. It is a tool that converts source code from one programming language to another. It is a tool that converts source code from one programming language to another.

// Exercises: JSX Elements
// 1. What is a JSX element?
// JSX element is a JavaScript object which represents an HTML element. It is a JavaScript object which represents an HTML element. It is a JavaScript object which represents an HTML element.
// Example: const element = <h1>Hello World</h1>;
// 2. Write your name in a JSX element and store it in a name variable
const name = <h1>John Doe</h1>;
// 3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const author =
  ((<h1>John Doe</h1>),
  (<p>USA</p>),
  (<p>Mr.</p>),
  (<p>Male</p>),
  (<p>awan@mail.com</p>),
  (<p>1234567890</p>));
// 4. Write a footer JSX element
const footer = (
  <footer>
    <p>Footer</p>
  </footer>
);

// Exercises: Inline Style
// 1. Create a style object for the main JSX
// 2. Create a style object for the footer and app JSX
// 3. Add more styles to the JSX elements

// Exercises: Internal Styles
// 1. Apply different styles to your JSX elements

// Exercise: Inject data to JSX
// 1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
