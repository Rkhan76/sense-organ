// variables declaration
var block1;
var flag = -1;
var block2;
var win = new Audio("./music/awesome.mp3");
var lose = new Audio("./music/yucky.mp3");
var button = document.getElementsByTagName("button");
var message = document.getElementsByClassName("message");
var container = document.getElementsByClassName("container");
var random = (Math.floor((Math.random() * 6)));
var images = document.getElementsByClassName('images-cont1');
var organ = document.getElementsByClassName("organ");
var organMatch = document.getElementsByClassName("organMatch");


// array storage for saving the images of sense oragan and its matching imgaes
var nose = ["nose1", "nose2", "nose3", "nose4", "nose5"];
var ear = ["ear1", "ear2", "ear3", "ear4", "ear5"];
var skin = ["touch1", "touch2", "touch3", "touch4", "touch5"];
var tongue = ["tongue1", "tongue2", "tongue3", "tongue4", "tongue5"];
var eye = ["eye1", "eye2", "eye3", "eye4", "eye5"];
var final = [nose[random], ear[random], skin[random], tongue[random], eye[random]];



// Array to store generated numbers and to non-repeate the random number
var generatedNumbers = [];
function generateNonRepeatedRandomNumber(min, max) {                        // Function to generate non-repeated random number
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;     // Generate a random number within the specified range
  if (generatedNumbers.includes(randomNumber)) {                            // Check if the number has already been generated
    return generateNonRepeatedRandomNumber(min, max);                       // If it's a repeated number, generate a new one recursively
  } else {
    generatedNumbers.push(randomNumber);                                    // If it's a non-repeated number, store it and return
    return randomNumber;
  }
}


for (var i = 0; i < 5; i++) {
  generateNonRepeatedRandomNumber(0, 4);
}

for (var i = 0; i < images.length; i++) {
  images[i].innerHTML = `<img class="items" src="./images/secondColumn/${final[generatedNumbers[i]]}.jpg" alt="ear-image">`;
}

// hide the second page or content
button[0].addEventListener("click", function () {
  message[0].classList.add("hide");
  container[0].classList.remove("hide");
})

//for scaling image on click of first column
var organArray = [...organ];
organArray.forEach(function (element) {
  element.addEventListener('click', function () {
    hello(element);
  })
});


//fuction for scaling image on click of first column
function hello(element) {
  block1 = element.innerHTML;
  block2 = element;
  flag = 1;
  for (var i = 0; i < 5; i++) {
    organ[i].style.transform = 'scale(1)';
    organ[i].style.zIndex = '1';
  }
  element.style.transform = 'scale(1.1)';
  element.style.zIndex = '2';
}

// for scaling image on click of second column
var organMatchArray = [...organMatch];
organMatchArray.forEach(function (element) {
  // element is the each imgae of the second column
  element.addEventListener("click", function () {
    if (flag == 1) {
      console.log(flag, "loop");
      for (var i = 0; i < 5; i++) {
        organMatchArray[i].style.transform = 'scale(1)';
        organMatchArray[i].style.zIndex = '1';
      }
      element.style.transform = 'scale(1.1)';
      element.style.zIndex = '2';


      console.log(element.innerHTML.substring(46, 49));
      if (block1.substring(44, 47) == element.innerHTML.substring(46, 49)) {
        element.style.opacity = '0.5';
        element.style.transform = 'scale(1)';
        block2.style.transform = 'scale(1)';
        block2.style.zIndex = '1';
        block2.style.opacity = '0.5';
        block2.style.pointerEvents = 'none';
        element.style.pointerEvents = 'none';
        var span1 = document.createElement('span');
        // for green tick of column2
        span1.id = 'mark1';
        span1.className = 'mark';
        span1.innerHTML = '&#10003;';
        block2.appendChild(span1);
        block2.style.display = 'flex';
        block2.style.flexDirection = 'column-reverse';
        block2.style.opacity = '1';

        // for green tick  of column1
        var span2 = document.createElement('span');
        span2.id = 'mark2';
        span2.className = 'mark';
        span2.innerHTML = '&#10003;';
        element.appendChild(span2);
        element.style.display = 'flex';
        element.style.flexDirection = 'column-reverse';
        element.style.opacity = '1';

        win.play();
        flag = 0;
        console.log(flag);
      }
      else {
        var count1 = 0;
        span3();
        console.log('hello world');
        var interval1 = setInterval((e) => {
          count1++;
          if (count1 == 1) {
            console.log('display-none');
            document.getElementById('mark4').style.display = 'none';
            document.getElementById('mark3').style.display = 'none';
            element.style.transform = 'scale(1)';
            block2.style.transform = 'scale(1)';
            clearInterval(interval1);
          }
        }, 1000);
  
        var span4 = document.createElement('span');
        span4.id = 'mark4';
        span4.className = 'mark';
        span4.innerHTML = '&#10007;';
        span4.style.color = 'red';
        element.appendChild(span4);
        element.style.display = 'flex';
        element.style.flexDirection = 'column-reverse';
        element.style.opacity = '1';
        
        lose.play();
      }
    }
  });
})


//&#10003;
//&#10007;
// fuction for red cross of column2
function span3() {
  var span3 = document.createElement('span');
  span3.id = 'mark3';
  span3.className = 'mark';
  span3.innerHTML = '&#10007;';
  span3.style.color = 'red';
  block2.appendChild(span3);
  block2.style.display = 'flex';
  block2.style.flexDirection = 'column-reverse';
  block2.style.opacity = '1';
}

// function for red cross of column1
// function span4(element) {
  
// }