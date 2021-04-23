JS JSON (Javascript Object Notation) -> format data
--

var data = {
  "result" : [{
  "id" = 1,
  "nama" = "jhon",
  "nilai" = 95
  }]
};
console.log(data);

// JSON Text
var data = {
  "result" : [
  "id" = 1,
  "nama" = "jhon",
  "nilai" = 95
  ]
};
// Convert Json Text To Json Format (js Object)
data = JSON.parse(data);

// Convert Json Format (js Object) To Json Text
data = JSON.stringify(data);