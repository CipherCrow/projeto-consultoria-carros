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
const menu = document.querySelector('.mobile');
const links = document.querySelectorAll('.mobile ul li a');

navMobile.addEventListener('click',function(){
	abreFecha();
})
	//fechar menu após clique
	for(let i = 0;i < links.length;i++){	
		links[i].addEventListener('click',function(){
			abreFecha();
		});
	}
// links[1].addEventListener('click',function(){
// 	abreFecha();
// })
// links[2].addEventListener('click',function(){
// 	abreFecha();
// })
// links[3].addEventListener('click',function(){
// 	abreFecha();
// })

function abreFecha(){
	menu.classList.toggle("abrir");
}

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
			precoAtual = formatarPreco(precoAtual);
			$('.preco-atual').html('R$'+precoAtual);
		}
	})

	function formatarPreco(precoAtual){
		precoAtual = precoAtual.toFixed(2);
		var preco_arr = precoAtual.split('.');

		var novo_preco = formatarTotal(preco_arr);
		return novo_preco;
	}
	function formatarTotal(preco_arr){
		if (preco_arr[0] < 1000) {
			return preco_arr[0] + preco_arr[1];
		}else if(preco_arr[0]<10000){
			return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
			','+preco_arr[1];
		}else{
			return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
			','+preco_arr[1];
		}

	}

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
