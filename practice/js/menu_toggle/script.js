var trigger = document.getElementById('menu-trigger');
var active = document.getElementById('menu-trigger');
 
var show = false;
trigger.onclick = function() {
  if (show) {
    show = false;
    active.classList.remove('active');
  } else {
    show = true;
    active.classList.add('active');
  }
}