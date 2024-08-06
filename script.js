var originalText = document.querySelector("#original-text");
var translatedText = document.querySelector("#translated-text");
var translateBtn = document.querySelector("#translate");

//Different type of translations

var type2 = document.getElementById('yoda');


var serverURL = ''; //declaring empty serverURL



function yoda(){       //yoda function for event handling of shakespeare function
  var translationType = 'yoda';
  var bgObj = document.getElementById('wrapper');
  bgObj.style.backgroundImage = "url('https://images.unsplash.com/photo-1612562588694-c4505dc3d031?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9kYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')";
  type2.style.backgroundColor = 'rgb(4, 71, 116)';
  serverURL = "https://api.funtranslations.com/translate/"+translationType+".json";//building serverURL for yoda translation
}
yoda();
type2.addEventListener('click',yoda);   //click event listener for yoda translation




function getURL(text) {                   // API URL builder function
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  alert("API call limit exceeded. Try again later.");  // Error handling function 
}

function translate() {        // defining function for translate event.
  var inputText = originalText.value;
  if(inputText==''){                              // Handling empty input text request
    alert('Please enter some text to translate.')
  }
  else{                         //Fetching Data from API and dispalying translation output 
    fetch(getURL(inputText))
    .then((response) => response.json())
    .then(json => {
      var translatedtext = json.contents.translated;
      translatedText.innerText = translatedtext;
    })
    .catch(errorHandler);
  }
}
translateBtn.addEventListener("click", translate); //click event listener for translate button