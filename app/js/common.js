$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// картинка в хедере занимает всю высоту окна
	function heightDetect(){
		$(".main-head").css("height", $(window).height());
	};
	// вызываем функцию
	heightDetect();
	// при ресайзе тоже должна срабатывать
	$(window).resize(function(){
		heightDetect();
	});

	// кнопка меню
	$(".toggle-menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	// убираем меню при клике на пункт меню
	$(".top-menu a").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".header-center").css("opacity", "1");
	});

	//показываем и скрываем меню при клике fadeInUp это плагин animated
	$(".toggle-menu").click(function(){
		$(".top-menu").fadeToggle(600);
		$(".top-menu a").toggleClass("fadeInUp animated");
		$(".header-center").toggleClass("h-opacity");
	});

	//модальное окно с картинкой
	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({type:"inline", midClick: true});

	//плагин для фильтрации mixItUp
	$(".portfolio-container").mixItUp();

	//портфолио, фильтр
	$(".s-portfolio li").click(function() {
		$(".s-portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	//цикл для создания динамически id и добавление его в ссылку, классы так же можно генерировать
	$(".portfolio-item").each(function(i){
		$(this).find(".popup-content").attr("href", "#work_" + i);
		$(this).find(".port-desc").attr("id", "work_" + i);
	});

	particlesJS("particles-js", {
	  "particles": {
	    "number": {
	      "value": 100,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 3,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#ffffff",
	      "opacity": 0.4,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 6,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 292.34779642848423,
	        "line_linked": {
	          "opacity": 0.7239044775137166
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 103.89610389610391,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});

	var secondParticlerExample = new Particler("molecules__wrapper", {
        quantity: 50,
        lineWidth: 2,
        fillColor: "black",
        minSize: 3,
        maxSize: 8,
        minimalLineLength: 50,
        speed: 40,
    });


});

// прелоадер
$(window).on('load', function () {
    var $preloader = $('.loader-inner'),
        $spinner   = $('.loader');
    $spinner.fadeOut();
    $preloader.delay(400).fadeOut('slow');
});