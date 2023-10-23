const second = document.getElementById('mssecond');
const third = document.getElementById('msthird');
const fourth = document.getElementById('msfourth');
const fifth = document.getElementById('msfifth');

const elems = document.querySelectorAll('.direction-of-preparation__article').forEach(
    article => {
      article.onmouseenter = function (e) {
        var psId = article.id.replace('d', 'ps');
        document.getElementById(psId).style.display = 'flex';
        document.getElementById(psId).style.animation = 'appearance 1s ease-in-out'
        if (article.id != 'dthird') {
          second.style.display =mptitle.style.display= third.style.display= fourth.style.display= fifth.style.display = 'flex';
          second.style.animation =mptitle.style.animation= third.style.animation= fourth.style.animation= fifth.style.animation = 'appearance 1s ease-in-out';
        }
         else {
          second.style.display = third.style.display= fifth.style.display = 'none';
          document.getElementById('msfirst').style.display =mptitle.style.display= fourth.style.display= fifth.style.display = 'flex';
          document.getElementById('msfirst').style.animation =mptitle.style.animation= fourth.style.animation= fifth.style.animation = 'appearance 1s ease-in-out';
        }
      }
      article.onmouseleave = function (e){
        var psId = article.id.replace('d', 'ps');
        document.getElementById(psId).style.animation = 'disappearance 1s ease-in-out'
        setTimeout(function() {document.getElementById(psId).style.display = 'none'}, 900);
        if (article.id == 'dthird') {
          setTimeout(function() {document.getElementById('msfirst').style.display = 'none'},900)
          document.getElementById('msfirst').style.animation = 'disappearance 1s ease-in-out';
        }
      }
    }
 )

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    else {
      entry.target.classList.remove('show')
    }
  })
})

 const hiddenElements = document.querySelectorAll('.admission-stage');
 hiddenElements.forEach((el)=>observer.observe(el))

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







