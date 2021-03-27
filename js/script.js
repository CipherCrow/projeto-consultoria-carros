const navMobile = document.querySelector('.mobile i');

navMobile.addEventListener('click',function(){
	const menu = document.querySelector('.mobile');
	menu.classList.toggle("abrir");
})