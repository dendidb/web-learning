JS Break  continue
--

let i = 1;
while(i <= 10) {
  console.log(i);
  break;
  i++;
}

let i = 1;
while(i <= 10) {
  console.log(i);
  continue;
  i++;
}

// Example
let i = 1;
while(i <= 10) {
  console.log(i);
  if (i == 7){
    break;
  }
  i++;
}