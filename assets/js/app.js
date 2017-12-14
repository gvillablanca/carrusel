$(document).ready(function(){
	//que me oculte las imagenes restantes 
	$("img").hide();
    $("img").first().show();

	//btn1
  $('#btn1').click(function(){
    $('.img1').show();  
  })

  $('#btn1').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img11').hide();  
  })

	//btn2
  $('#btn2').click(function(){
    $('.img2').show();  
  })

  $('#btn2').click(function(){
    $('.img1, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img11').hide();  
  })

	//btn3
  $('#btn3').click(function(){
    $('.img3').show();  
  })

  $('#btn3').click(function(){
    $('.img2, .img1, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img11').hide();  
  })  

	//btn4
  $('#btn4').click(function(){
    $('.img4').show();  
  })

  $('#btn4').click(function(){
    $('.img2, .img1, .img3, .img5, .img6, .img7, .img8, .img9, .img10, .img11').hide();  
  })
	//btn5
  $('#btn5').click(function(){
    $('.img5').show();  
  })

  $('#btn5').click(function(){
    $('.img2, .img3, .img4, .img1, .img6, .img7, .img8, .img9, .img10, .img11').hide();  
  })
	//btn6
  $('#btn6').click(function(){
    $('.img6').show();  
  })

  $('#btn6').click(function(){
    $('.img2, .img3, .img4, .img5, .img1, .img7, .img8, .img9, .img10, .img11').hide();  
  })
	//btn7
  $('#btn7').click(function(){
    $('.img7').show();  
  })

  $('#btn7').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img1, .img8, .img9, .img10, .img11').hide();  
  })
	//btn8
  $('#btn8').click(function(){
    $('.img8').show();  
  })

  $('#btn8').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img7, .img1, .img9, .img10, .img11').hide();  
  })
	//btn9
  $('#btn9').click(function(){
    $('.img9').show();  
  })

  $('#btn9').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img7, .img8, .img1, .img10, .img11').hide();  
  })
	//btn10
  $('#btn10').click(function(){
    $('.img10').show();  
  })

  $('#btn10').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img1, .img11').hide();  
  })
	//btn11
  $('#btn11').click(function(){
    $('.img11').show();  
  })

  $('#btn11').click(function(){
    $('.img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img1').hide();  
  })

  //botones laterales
		var images = [];
		$('img').each(function(){
		    images.push($(this));    
		});

		var imgcount = images.length;
		$("img").hide();
		$("img").first().show();
		var currentItem = 0;

		$('.right').click(function(){
		        $("img").hide();
		        currentItem++;
		        images[currentItem%imgcount].show();        
		});


		$('.left').click(function(){
		        $("img").hide();
		       currentItem--;
		       if(currentItem < 0)
		           currentItem = imgcount-1;
		       images[currentItem%imgcount].show();
		});
  
});
