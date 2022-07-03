// What does the term Transpiling stand for? 

// There's no way to polyfill new syntax that has been added to the language. So the better option is to use a tool that converts your newer code into older code equivalents. This process is commonly called transpiling, a term for transforming + compiling.

// Typically you insert the transpiler into your build process, similar to your code linter or your minifier. There are quite a few great transpilers for you to choose from:

// Babel: Transpiles ES6+ into ES5
// Traceur: Transpiles ES6, ES7, and beyond into ES5


// <html>
//   <head> 
//     <title> Sample transpiling ES6 to ES5 </title>
//   </head>
//   <body>
//     <div id="output"></div>
//     <!-- Load Babel -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js"></script>
//     <!-- Your custom script here -->
//     <script type="text/babel">
//       const getMessage = () => "Hello World";
//       document.getElementById('output').innerHTML = getMessage();
//     </script>
//   </body>
// </html>