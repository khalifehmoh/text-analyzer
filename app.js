//Remove the ".hidden" class to show results when submitting form
function showResults(){
  $(".js-form").submit(function(event){
    event.preventDefault();
    $("dl").removeClass("hidden");
  })
}

//Get the words from the input area
function getWords() {
   var words = $("textarea").val();
   var tokens = getTokens(words);
   return tokens
}

//a function to split the words and sort them, then put them into an array
function getTokens(rawString) {
	return rawString.toLowerCase().split(/[.!?",:;-\s]+/).filter(Boolean).sort();
}



//Analysis goes from here:

function wordCount() {
  //start by getting the array of words
  var token = getWords();
  
  //get the number of words
  var numOfWords = token.length;
  
  //print the result
  $("dl .js-word_count").text(numOfWords);
}

function uniqueCount() {
	//start by getting the array of words
	var arrOfWords = getWords();
  
  //create an Object to hold the unique words
  var unqWords = {};

  //assign a value of "1" for each word that is not in the list of unique words
  for (var i=0; i<arrOfWords.length; i++){
  	if (!(arrOfWords[i] in unqWords)){
    	unqWords[arrOfWords[i]]=1
    }
  }
  
  //get the number of unique words
  var unqCount = Object.keys(unqWords).length
  
  //print the result
  $("dl .js-unq_count").text(unqCount);
}

function avgWordLength () {
  //start by getting the array of words
  var token = getWords();
  
  //initilize number of words to zero
  var numOfLetters = 0;
  
  //iterate over each word(String), and add its length to the total number of words
  token.forEach(function(word) {
  	numOfLetters += word.length
  });
  
  //get the number of words
  var numOfWords = token.length;
  
  //find the average length by dividing the total number of letters, to the number of words
  var avgLength = (numOfLetters / numOfWords).toFixed(2);
  
  //print the result
  $("dl .js-avg_count").text(avgLength);
}

//handle form submission
function runAnalysis() {
  $(".js-form").submit(function(event){
    wordCount();
    uniqueCount();
    avgWordLength();
    })
}

//watch for submissions
$(function(){
  showResults();
  runAnalysis();
})




