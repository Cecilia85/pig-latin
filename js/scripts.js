
// business logic
var pigLatin=function(x) {
  if (x[0]==="a"||x[0]==="e"||x[0]==="i"||x[0]==="o"||x[0]==="u") {
    return x+"ay";
  }
};



// user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var word = ($("input#word").val());
    var result =pigLatin(word);
    $("#result").text(result);
  });
});

// pigLatinWord.forEach(function(replaceWord) {
//   alert('I love ' + replaceWord + '!');
// });
