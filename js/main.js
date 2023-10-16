function makeVisibleFirst(event) {
  if (event.type == "mouseover") {
    document.getElementById('psfirst').style.display = 'flex';
    document.getElementById('mssecond').style.display = 'flex';
    document.getElementById('msthird').style.display = 'flex';
    document.getElementById('msfourth').style.display = 'flex';
    document.getElementById('msfifth').style.display = 'flex';
  }
  else if (event.type == "mouseout") {
    document.getElementById('psfirst').style.display = 'none';
    document.getElementById('mssecond').style.display = 'none';
    document.getElementById('msthird').style.display = 'none';
    document.getElementById('msfourth').style.display = 'none';
    document.getElementById('msfifth').style.display = 'none';
  }
}
 var dfirst = document.getElementById("dfirst");
 dfirst.addEventListener("mouseover", makeVisibleFirst);
 dfirst.addEventListener("mouseout", makeVisibleFirst);
 function makeVisibleSecond(event) {
  if (event.type == "mouseover") {
    document.getElementById('pssecond').style.display = 'flex';
    document.getElementById('mssecond').style.display = 'flex';
    document.getElementById('msthird').style.display = 'flex';
    document.getElementById('msfourth').style.display = 'flex';
    document.getElementById('msfifth').style.display = 'flex';
  }
  else if (event.type == "mouseout") {
    document.getElementById('pssecond').style.display = 'none';
    document.getElementById('mssecond').style.display = 'none';
    document.getElementById('msthird').style.display = 'none';
    document.getElementById('msfourth').style.display = 'none';
    document.getElementById('msfifth').style.display = 'none';
  }
}
 var dsecond = document.getElementById("dsecond");
 dsecond.addEventListener("mouseover", makeVisibleSecond);
 dsecond.addEventListener("mouseout", makeVisibleSecond);
 function makeVisibleThird(event) {
  if (event.type == "mouseover") {
    document.getElementById('psthird').style.display = 'flex';
    document.getElementById('msfirst').style.display = 'flex';
    document.getElementById('msfourth').style.display = 'flex';
    document.getElementById('msfifth').style.display = 'flex';
  }
  else if (event.type == "mouseout") {
    document.getElementById('psthird').style.display = 'none';
    document.getElementById('msfirst').style.display = 'none';
    document.getElementById('msfourth').style.display = 'none';
    document.getElementById('msfifth').style.display = 'none';
  }
}
 var dthird = document.getElementById("dthird");
 dthird.addEventListener("mouseover", makeVisibleThird);
 dthird.addEventListener("mouseout", makeVisibleThird);
 function makeVisibleFourth(event) {
  if (event.type == "mouseover") {
    document.getElementById('psfourth').style.display = 'flex';
    document.getElementById('mssecond').style.display = 'flex';
    document.getElementById('msthird').style.display = 'flex';
    document.getElementById('msfourth').style.display = 'flex';
    document.getElementById('msfifth').style.display = 'flex';
  }
  else if (event.type == "mouseout") {
    document.getElementById('psfourth').style.display = 'none';
    document.getElementById('mssecond').style.display = 'none';
    document.getElementById('msthird').style.display = 'none';
    document.getElementById('msfourth').style.display = 'none';
    document.getElementById('msfifth').style.display = 'none';
  }
}
 var dfourth = document.getElementById("dfourth");
 dfourth.addEventListener("mouseover", makeVisibleFourth);
 dfourth.addEventListener("mouseout", makeVisibleFourth);
 function makeVisibleFifth(event) {
  if (event.type == "mouseover") {
    document.getElementById('psfifth').style.display = 'flex';
    document.getElementById('mssecond').style.display = 'flex';
    document.getElementById('msthird').style.display = 'flex';
    document.getElementById('msfourth').style.display = 'flex';
    document.getElementById('msfifth').style.display = 'flex';
  }
  else if (event.type == "mouseout") {
    document.getElementById('psfifth').style.display = 'none';
    document.getElementById('mssecond').style.display = 'none';
    document.getElementById('msthird').style.display = 'none';
    document.getElementById('msfourth').style.display = 'none';
    document.getElementById('msfifth').style.display = 'none';
  }
}
 var dfifth = document.getElementById("dfifth");
 dfifth.addEventListener("mouseover", makeVisibleFifth);
 dfifth.addEventListener("mouseout", makeVisibleFifth);

var sum=0;
document.getElementById('section').onwheel = function (event) {
  var line = event.deltaY;
  sum = sum +line*0.1;
  if (sum > 50) {
    document.getElementById('first').style.display = 'flex';
  }
  if (sum > 100) {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'flex';
  }
  if (sum > 150) {
    document.getElementById('second').style.display = 'none';
    document.getElementById('third').style.display = 'flex';
  }
  if (sum > 200) {
    document.getElementById('third').style.display = 'none';
    document.getElementById('fourth').style.display = 'flex';
  }
  if (sum > 250) {
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('fifth').style.display = 'flex';
  }
  if (sum > 300) {
    document.getElementById('first').style.display = 'flex';
    document.getElementById('second').style.display = 'flex';
    document.getElementById('third').style.display = 'flex';
    document.getElementById('fourth').style.display = 'flex';
    document.getElementById('fifth').style.display = 'flex';
    sum=99999999999;
    return true;
  }
  return false;
}







