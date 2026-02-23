var words = ["Full Stack Developer", "Web Designer"];
var i = 0;
var j = 0;
var currentWord = "";
var isDeleting = false;

function type(){
  currentWord = words[i];

  if(!isDeleting){
    document.querySelector(".typing").textContent =
      currentWord.substring(0, j+1);
    j++;
    if(j === currentWord.length){
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").textContent =
      currentWord.substring(0, j-1);
    j--;
    if(j === 0){
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}

type();