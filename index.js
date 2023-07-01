function goToNextPage() {
    window.location.href = "./game.html";
  }

let images = ["dice-one.png","dice-two.png","dice-three.png", "dice-four.png","dice-five.png","dice-six.png"]  

let dice = document.querySelectorAll("img")

function roll(){
    dice.forEach(function(die){
      die.classList.add("shake")
    });
    setTimeout(function(){
      dice.forEach(function(die){
        die.classList.remove("shake");
      })
      let dieOne = Math.floor(Math.random()*6);
      let dieTow = Math.floor(Math.random()*6);
      console.log(dieOne,dieTow)
      document.querySelector("#die-1").setAttribute("src",images[dieOne]);
      document.querySelector("#die-2").setAttribute("src",images[dieTow]);
      if(dieOne<dieTow){
        document.querySelector(".head-line").textContent=" \uD83C\uDF89🎉\ Player Second won \uD83C\uDF89🎉"
      }
      else if(dieOne>dieTow){
        document.querySelector(".head-line").textContent="\uD83C\uDF89🎉\ Player First won \uD83C\uDF89🎉"
      }
      else{
        document.querySelector(".head-line").textContent="Game draw \uD83D\uDE42"
      }
    },
    1000
    ); 
}