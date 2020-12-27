import {
  gsap
} from "gsap";


document.addEventListener('DOMContentLoaded', () => {

  if (screen.width > 1300) {
    let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree;

    const page = document.querySelector('body');


    cx = window.innerWidth / 2
    cy = window.innerHeight / 2

    page.addEventListener('mousemove', e => {

      clientX = e.pageX;
      clientY = e.pageY;

      request = requestAnimationFrame(updateMe);


    });


    function updateMe() {

      dx = clientX - cx
      dy = clientY - cy
      tiltx = dy / cy
      tilty = dx / cx
      radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
      degree = radius * 12

      let ava = document.querySelector('.pers__ava-img');
      let persDescr = document.querySelector('.pers__descr');

      if (ava && persDescr) {
        gsap.to('.pers__ava-img', 1, {
          transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`
        })
        gsap.to('.pers__descr', 1, {
          transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`
        })
      }



    }
  }


});