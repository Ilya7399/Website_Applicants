const second = document.getElementById('mssecond');
const third = document.getElementById('msthird');
const fourth = document.getElementById('msfourth');
const fifth = document.getElementById('msfifth');

const elems = document.querySelectorAll('.direction-of-preparation__article').forEach(
    article => {
      article.onmouseenter = function (e) {
        console.log(article.id)
        var psId = article.id.replace('d', 'ps');
        document.getElementById(psId).style.display = 'flex';
        if (article.id != 'dthird') {
          second.style.display =mptitle.style.display= third.style.display= fourth.style.display= fifth.style.display = 'flex';
        }
         else {
          document.getElementById('msfirst').style.display =mptitle.style.display= fourth.style.display= fifth.style.display = 'flex';
        }
      }
      article.onmouseleave = function (e){
        var psId = article.id.replace('d', 'ps');
        document.getElementById(psId).style.display = 'none';
        if (article.id != 'dthird') {
          second.style.display = third.style.display= mptitle.style.display=fourth.style.display= fifth.style.display = 'none';
        }
        else {
          document.getElementById('msfirst').style.display =mptitle.style.display=fourth.style.display= fifth.style.display = 'none';
        }
      }
    }
 )

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







