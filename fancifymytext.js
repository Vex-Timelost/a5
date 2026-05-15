function makeBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}
 
function applyStyle() {
  var textArea = document.getElementById("textArea");
  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}
 
function moo() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value.toUpperCase();
  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].trim();
    if (sentence.length > 0) {
      var words = sentence.split(" ");
      words[words.length - 1] += "-MOO";
      sentences[i] = words.join(" ");
    }
  }
  textArea.value = sentences.join(".");
}
