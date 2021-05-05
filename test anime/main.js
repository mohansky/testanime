// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Wrap every letter in a span
var textWrap = document.querySelector('.ml3');
textWrap.innerHTML = textWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Wrap every letter in a span
var textWra = document.querySelector('.ml12');
textWra.innerHTML = textWra.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var tl = anime.timeline({
  autoplay: false  
})
tl.add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2500,
    delay: (el, i) => 70*i
  })
  .add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
   // 1
  .add({
    targets : 'body',
    backgroundColor: '#cfa124', 
    duration: 400,  
    easing: "easeOutExpo", 
  })
  // 2
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1500,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets : 'body',
    backgroundColor: '#24b29c', 
    duration: 400,  
    easing: "easeOutExpo", 
  })
  // 3
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2500,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  document.querySelector('  #btns .play').onclick = tl.play;
  document.querySelector(' #btns .pause').onclick = tl.pause; 

 
         
       
 