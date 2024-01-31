'use strict'
var gPxNum = 100

function onBallClick() {
    gPxNum += 50
    if(gPxNum > 400) gPxNum = 100
  
    const elBall = document.querySelector('.ball')
    elBall.style.height = gPxNum + 'px'
    elBall.style.width = gPxNum + 'px'
    elBall.innerText = gPxNum
}