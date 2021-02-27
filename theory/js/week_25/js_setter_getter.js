JS Setter Getter
--

- Getter (mendapatkan suatu nilai dari HTML)
// 1. innertext
document.getElementById('value-id').innerText;
// 2. innerHTML
document.getElementById('value-id').innerHTML;
// 3. value input
document.getElementById('value-id').value;
// 4. value from attribute
document.getElementById('value-id').getAttribute('Attribute');

- Setter (memberi nilai ke HTMl)
// 1. innertext
document.getElementById('value-id').innerText = "string";
// 2. innerHTML
document.getElementById('value-id').innerHTML = "HTML String tag";
// 3. value input
document.getElementById('value-id').value = value;
// 4. set value to attribute
document.getElementById('value-id').setAttribute('class', 'red');

// example function plus minus button
var titleText = document.getElementById('box').innerHTML;

document.getElementById('box2').innerHTML = titleText;
document.getElementById('minus').onclick = function() {
  var inputName = number(document.getElementByid('inputName').value) - 1;
  document.getElementById('inputName').value = inputName;
}

document.getElementById('plus').onclick = function() {
  var inputName = number(document.getElementByid('inputName').value) + 1;
  document.getElementById('inputName').value = inputName;
}











