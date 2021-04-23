var tabControl = documet.getElementByClassName('ja-tab');
var contentItem = documet.getElementByClassName('tab-content-item')

function removeActive() {
  var k;
  // remove class tab control
  for(k=0;k<tabControl.length;k++) {
    tabControl[k].classList.remove('active');
  }
}

var i;
for(k=0;k<tabControl.length;k++) {
  tabControl[i].onnclick = function() {
  // proses remove calss tab control
  removeActive();
  // dapatkan targer content
  var targetItem = this.getAttribute('data-target');
  var j;
    // proses remove tab cotent
    for(j=0;j<tabControl.length;j++) {
      contentItem[j].classList.remove('active');
    }
    // add active di content
    document.getElementById(targetItem).classList.add('active');
    // add active control yg di clik
    this.classList.add('active');
  }
}
