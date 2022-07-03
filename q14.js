// What's the difference between Host objects and Native objects? 

// Built-in objects: String, Math, RegExp, Object, Function etc. - core predefined objects are always available in JavaScript. Defined in the ECMAScript spec.

// Host objects: objects like window, XmlHttpRequest, DOM nodes, and so on, which are provided by the browser environment. They are distinct from the built-in objects because not all environments will have the same host objects. If JavaScript runs outside of the browser, for example as a server-side scripting language like in Node.js, different host objects will be available