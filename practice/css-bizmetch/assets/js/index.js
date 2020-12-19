var checkCount = 0
var maxChecks = 5
function setChecks(obj) {
  console.log(checkCount)
  if (obj.checked) {
    checkCount = checkCount + 1
  }else{
    checkCount = checkCount -1
  }
  if (checkCount > maxChecks){
    obj.checked = false
    checkCount = checkCount -1
  }
}