function addUp(number){
    var sum = 0;
    for(var i = 1; i <= number; i++){
      sum += i;
    }
    return sum;
  }
  
  document.write (addUp(4));
  document.write ("<br>")
  document.write (addUp(10));
  document.write ("<br>")
  document.write (addUp(61));