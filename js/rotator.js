//heavily inspired from this article https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

let rotatorItems = []
let selectorClass = 'rotatorContainer'
let count = 0
window.onload = function loadFrame() {
  rotatorItems = document.getElementsByClassName(selectorClass)
  setInterval(updateRotator, 3000)
}

function updateRotator() {
  console.log('updated');
  rotatorItems[count].classList.add('unactive')
  rotatorItems[count].classList.remove('active')
  count = (count + 1) % rotatorItems.length
  rotatorItems[count].classList.remove('unactive')
  rotatorItems[count].classList.add('active')
}
