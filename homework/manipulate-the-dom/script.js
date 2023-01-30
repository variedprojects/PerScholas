let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let mainEl = document.querySelector("#main-title")
mainEl.innerText = "Lets go"


  // Part 2

  body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = "blue"
  // Part 3
  let select = document.getElementById("favorite-things");
select.removeChild(select.lastElementChild);

  

  // Part 4
  let qod = document.querySelectorAll(".special-title")
  for (let i = 0; i < qod.length; i++){
    qod[i].style.fontSize="2rem"
  }

  // Part 5
  racing = document.querySelector("#past-races");
  for (var i = 0; i < racing.children.length; i++) {
    racing.children[i].textContent == "Chicago" ?
      racing.children[i].remove() :
      null
  }
  // Part 6
 
 
  racing.innerHTML += '<li>NJ</li>'

  // Part 7
  let fun = document.querySelector('.main')
  const blog = document.createElement('div')
  blog.classList.add('blog-post')
  blog.classList.add('purple')
  const h2 = document.createElement('h1')
  h2.innerHTML = 'New Jersey'
  const para = document.createElement('p')
  para.innerHTML = "New"
  blog.appendChild(h2)
  blog.appendChild(para)
  fun.innerHTML += blog.outerHTML


  // Part 8

  let part8 = document.querySelector('#quote-title').addEventListener('click', randomQuote)

  // Part 9

  let vlog = document.querySelectorAll('.blog-post')

  vlog.forEach(function (part9) {
    part9.addEventListener('mouseout', function () {
      part9.classList.toggle('purple')
      
    })

    part9.addEventListener('mouseenter', function () {
      
      part9.classList.toggle('red')
    })
  })
});


