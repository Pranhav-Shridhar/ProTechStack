// Given a string, reverse each word in the sentence 

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");


function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}