var input = document.getElementById('main');
var response = document.getElementById('response');
var i = 0
var txt = "Welcome to Kweeper's portfolio."
var speed = 30
var commands = ["help", "about", "contact", "source", "skills"]
var responses = ["Here is a list of commands:<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>help</span> - Displays this menu.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>about</span> - Tells you about me.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>contact</span> - Get information on how to contact me.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>source</span> - Redirects you to the source of this web page.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>skills</span> - Shows you my skills in programming.<br>List of extra commands:<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>clear</span> - Clears the terminal.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>echo</span> [input] - Echos your input back.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>quote</span> - Gets a random quote from the internet.<br>&nbsp&nbsp&nbsp&nbsp<span class='highlight'>rps</span> [choice] - Plays rock paper scissors with you (the output is completely random)", "About Me:<br>Hello, visitor! My name is Kweeper, and I'm a passionate programmer who has been on an exciting coding journey since 2019.<br>At just 15 years old, I'm thrilled to be exploring the vast world of programming and constantly expanding my skills.<br>I have dived into various programming languages, such as Node.js and Python, and I enjoy the versatility and power they offer.<br>Whether it's building web applications with Node.js or crafting efficient scripts with Python, I love the challenge of solving problems through code.<br>One area where I excel is in creating Discord bots for automation.<br>Leveraging the Discord API and my programming skills, I'm able to develop bots that automate tasks, enhance server functionality, and bring communities together.<br>It's incredibly rewarding to see how automation can streamline processes and make everyone's experience smoother.<br>Programming has become a part of my life, and I'm constantly seeking new opportunities to learn, grow, and push the boundaries of what I can achieve.<br>I'm excited to collaborate, contribute, and make a positive impact in the world through my coding endeavors.<br>Thank you for joining me on this journey, and I look forward to connecting with fellow enthusiasts, sharing knowledge, and creating innovative solutions together.<br>Let's keep coding and embracing the endless possibilities of technology!", "Contact info:<br>&nbsp&nbsp&nbsp&nbspEmail - kweeper@protonmail.com<br>&nbsp&nbsp&nbsp&nbspDiscord - kweeper<br>&nbsp&nbsp&nbsp&nbspTelegram - t.me/NotKweeper<br>&nbsp&nbsp&nbsp&nbspV3rm - MentalBreakdown"]
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function help() {
  response.innerHTML = responses[0];
}
function about() {
  response.innerHTML = responses[1];
}
function contact() {
  response.innerHTML = responses[2];
}
function unknown(cmd) {
  response.innerHTML = `The command "${cmd}" doesn't exist.`;
}

function typeWriter(callback) {
  console.log(txt.length)
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function show() {
  const collection = document.getElementsByClassName("d-none");
  const elementsArray = Array.from(collection);
  elementsArray.forEach((element) => {
    console.log("hey")
    element.classList.remove("d-none")
  });
}
typeWriter()
setTimeout(show, 1000)
function handleprompts(event) {
      
      if (event.key === 'Enter') {
      console.log('Enter key pressed!');
      if (input.value == "help") {
        help()
      } else if (input.value == "about") {
        about()
      } else if (input.value == "contact") {
        contact()
      } else {
        unknown(input.value)
      }
      
      var originalElement = document.getElementById('browhat');
      var clonedElement = originalElement.cloneNode(true);
      originalElement.removeAttribute('id')
      document.getElementById("prompt").appendChild(clonedElement);
      input.setAttribute('disabled', true)
      input.removeAttribute('id')
      response.removeAttribute('id')
      input = document.getElementById('main')
      response = document.getElementById('response')
      response.innerHTML = ''
      input.value = ''
      refreshEventListener()
    }
}
function refreshEventListener() {
  //var inp = document.getElementById('main');

  // Remove existing event listener
  input.removeEventListener('keydown', handleprompts);

  // Add the updated event listener
  input.addEventListener('keydown', handleprompts);
}

window.addEventListener('DOMContentLoaded', function() {
  setInterval(function() {
    input.focus();
  }, 100);
  input.addEventListener('keydown', handleprompts);

});