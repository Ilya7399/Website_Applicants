document.getElementById('first').style.display = 'none';
document.getElementById('second').style.display = 'none';
document.getElementById('third').style.display = 'none';
document.getElementById('fourth').style.display = 'none';
document.getElementById('fifth').style.display = 'none';


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

