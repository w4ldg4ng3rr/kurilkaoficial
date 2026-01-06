const menuBtn = document.getElementById('menuBtn');
const navContainer = document.getElementById('navContainer');

menuBtn.addEventListener('click',function(){
  navContainer.classList.toggle('is-open');
  const icon =this.querySelector('.material-icons');

  if (navContainer.classList.contains('is-open')){
    icon.textContent = 'expand_less';
  } else {
    icon.textContent = 'menu'
  }

});