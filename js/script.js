const volante = document.querySelector('.preloader');
	//preloader
window.addEventListener('load',function(){
	volante.style.opacity = '0';
	setTimeout(function(){
		volante.style.display = 'none';
	}, 300);
})
	//mobile menu
const navMobile = document.querySelector('.mobile i');

navMobile.addEventListener('click',function(){
	const menu = document.querySelector('.mobile');
	menu.classList.toggle("abrir");
})


//Jquery
$(function(){
	var ponteiro = $('.pointer-barra');
	var barraFill = $('.barra-preco-fill');
	var currentValue = 0;
	var isDrag = false;
	var precoMax = 80000;
	var precoAtual = 0;


	//verifica se o botão está sendo pressionado
	ponteiro.mousedown(function(){
		isDrag = true;
	})
	$(document).mouseup(function(){
		isDrag = false;
		enableTextSelection();
	})

	$('.barra-preco').mousemove(function(e){
		if(isDrag){
			disableTextSelection();
			//e.pageX pega posição X do mouse no site
			var elBase = $(this);
			var mouseX = e.pageX - elBase.offset().left ;

			//verifica se o mouse está em posição fora ou dentro do negocio e ajusta
			if(mouseX < 0){
				mouseX = 0;
			} if( mouseX > elBase.width()){
				mouseX = elBase.width();
			}

			currentValue = (mouseX / elBase.width()) * 100;
			ponteiro.css('left',(mouseX-13)+'px');
			barraFill.css('width',currentValue+'%');

			precoAtual = (currentValue/100) * precoMax;
			$('.preco-atual').html('R$'+precoAtual);
		}
	})

	function disableTextSelection(){
		//impedir glitch de selecionar texto enquanto arrasta
		$('body').css('-webkit-user-select','none');
		$('body').css('-noz-user-select','none');
		$('body').css('-ns-user-select','none');
		$('body').css('-o-user-select','none');
		$('body').css('user-select','none');
	}
	function enableTextSelection(){
		//permitir de selecionar texto enquanto arrasta
		$('body').css('-webkit-user-select','auto');
		$('body').css('-noz-user-select','auto');
		$('body').css('-ns-user-select','auto');
		$('body').css('-o-user-select','auto');
		$('body').css('user-select','auto');
	}
})
