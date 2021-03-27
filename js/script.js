const volante = document.querySelector('.preloader');

window.addEventListener('load',function(){
	volante.style.opacity = '0';
	setTimeout(function(){
		volante.style.display = 'none';
	}, 300);
})

const navMobile = document.querySelector('.mobile i');

navMobile.addEventListener('click',function(){
	const menu = document.querySelector('.mobile');
	menu.classList.toggle("abrir");
})