
      jQuery(document).on('click', '.chehya', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');   
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.chehya1').css({'display' : 'block'}); 
        //do autocklick at "Прага" 
        jQuery('#n5').trigger('click'); 
      });

      jQuery(document).on('click', '.russia', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'block'}); 
        jQuery('.chehya1').css({'display' : 'none'});
        jQuery('.azer1').css({'display' : 'none'});
        jQuery('.armen1').css({'display' : 'none'});
        jQuery('.belarus1').css({'display' : 'none'});
        jQuery('.kazah1').css({'display' : 'none'});
        jQuery('.tadj1').css({'display' : 'none'});
        jQuery('.uzbek1').css({'display' : 'none'});
        jQuery('.kirgiz1').css({'display' : 'none'});
        jQuery('.ukraine1').css({'display' : 'none'});
    
        // jQuery('.rayon').text("Москва");       
        // jQuery('.phonne').text("+7-903-136-27-27");       
        // jQuery('.phonne2').text("8(499) 136 27 27");       
        // jQuery('.skyperr').text("moscow@pv-student.cz");        
        // jQuery('.adresse').text("");  
        // jQuery('.bg-image').attr("src","images/city/moskow.png");  
         //do autocklick 
        jQuery('#n1').trigger('click'); 
      });

      jQuery(document).on('click', '.azer', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.azer1').css({'display' : 'block'});        

        //do autocklick "Баку"
        jQuery('#n16').trigger('click');  

      });

      jQuery(document).on('click', '.armen', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.armen1').css({'display' : 'block'});       

        //do autocklick "Ереван"
        jQuery('#n15').trigger('click');  
      });

      jQuery(document).on('click', '.belarus', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.belarus1').css({'display' : 'block'});    

        //do autocklick "Минск"
        jQuery('#n4').trigger('click'); 

      });

      jQuery(document).on('click', '.kazah', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.kazah1').css({'display' : 'block'});
    
        //do autocklick "Астана"
        jQuery('#n31').trigger('click');  

      });

      jQuery(document).on('click', '.kirgiz', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.kirgiz1').css({'display' : 'block'});
    
        //do autocklick "Бишкек"
        jQuery('#n17').trigger('click');   
      });


      jQuery(document).on('click', '.tadj', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.tadj1').css({'display' : 'block'});
    
            
        //do autocklick "Душанбе"
        jQuery('#n42').trigger('click');     
      });

      jQuery(document).on('click', '.uzbek', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.uzbek1').css({'display' : 'block'});    
        
        //do autocklick "Ташкент"
        jQuery('#n41').trigger('click'); 
      });

      jQuery(document).on('click', '.ukraine', function(){
        jQuery('.country-list li a').removeClass('sga-active');
        jQuery(this).addClass('sga-active');  
        jQuery('.karta-bg-content-cities-ul li').css({'display' : 'none'}); 
        jQuery('.ukraine1').css({'display' : 'block'});
    
        //do autocklick "Киев"
        jQuery('#n6').trigger('click');   
      });



//scripts from main.js
  jQuery(document).ready(function(){
    
  if(jQuery(window).width() < 767) {
    jQuery('.textteam .team ul').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
      autoplay: true,
    swipe: false,
      autoplaySpeed: 3000,
    });  
  }
  
  jQuery('.home-slide').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
    autoplay: true,
  swipe: false,
    autoplaySpeed: 3000,
  });
    
  jQuery('.benefits-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
    autoplay: true,
  swipe: false,
    autoplaySpeed: 3000,
    prevArrow : '<div class="button button-prev"></div>',
  nextArrow : '<div class="button button-next"></div>',
  appendArrows : '.benefits-slider', 
  });
    
  jQuery('.aboutimg1-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
    autoplay: true,
  swipe: false,
    autoplaySpeed: 3000,
    prevArrow : '<div class="button button-prev"></div>',
  nextArrow : '<div class="button button-next"></div>',
  appendArrows : '.aboutimg1b', 
  });
  
  jQuery('.partnersslide').slick({
  dots: false,
  arrows: true,
    variableWidth: true, 
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  draggable: false,
    autoplay: true,
  swipe: false,
    autoplaySpeed: 3000,
    slide: 'span',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  
  jQuery('.certificates').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: false,
  swipe: false,
    autoplaySpeed: 2500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
     
    ]
  });
  
  jQuery('.slideer').slick({
  dots: false,
  centerMode: true,
  arrows: true,
  infinite: true,
  centerPadding: '16%',
  slide: '.slidee',
  appendArrows: '.slideerarr',
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
    autoplay: false,
  swipe: false,
    autoplaySpeed: 3000,  
    prevArrow : '<div class="button button-prev">Предыдущие</div>',
  nextArrow : '<div class="button button-next">Следующие</div>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '40px',
      }
    }
  ]
  });
    
 


    
jQuery('.numericslid').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
    autoplay: true,
    fade: true,
  swipe: false,
    autoplaySpeed: 10000,
    slide: 'div',
     
  });


 
});
    
jQuery(document).ready(function() {
    
    jQuery(".fancybox").fancybox({
      
    maxHeight : '95%',
    autoSize    : true, 
    autoWidth   : true,
    autoHeight  : true,
        
    helpers : {
      overlay : {
        locked: false
      }
            ,
    }
      
    
  });    
    jQuery(".fancybox-frame").fancybox({
      
    maxWidth  : '80%',
    minWidth  : '69%',
    maxHeight : '80%',
    autoSize    : true, 
    autoWidth   : true,
    autoHeight  : true,
        
    helpers : {
      overlay : {
        locked: false
      }
            ,
    }
      
    
  });   
    jQuery(".fancybox-modal").fancybox({
      
    maxHeight : '95%',
    autoSize    : true, 
    autoWidth   : true,
    autoHeight  : true,
        afterLoad : function(){
            jQuery(".fancybox-skin").addClass('zoomIn animated');
        },
        beforeClose : function(){
            jQuery(".fancybox-skin").removeClass('zoomIn animated');
            jQuery(".fancybox-skin").addClass('zoomOut animated');
        },
    helpers : {
      overlay : {
        locked: false
      }
            ,
    }
      
    
  });
    
    
  });

jQuery(document).ready(function() {
  jQuery('.buttonmenu').click(function () {
    jQuery('.top-menu').toggleClass('open');
    jQuery('.header').toggleClass('open'); 
    jQuery('.top-menu').animate({opacity: 'toggle', height: 'toggle'}, 1000);
  }); 
  
  jQuery('.top-menu a').click(function () {
    if (jQuery('#top-menu').hasClass('open')) {
  
    jQuery('.top-menu').removeClass('open');
    jQuery('.header').removeClass('open'); 
    jQuery('.top-menu').animate({opacity: 'toggle', height: 'toggle'}, 0);
    };
  });
});



jQuery(document).ready(function() {
    jQuery("body").css("display", "none");

    jQuery("body").fadeIn(1000);

    jQuery("a:not(:has(.fancybox), a:not(:has(.scrollbind)").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        jQuery("body").fadeOut(2000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});


jQuery(document).ready(function(){
jQuery(".set > a").on("click", function(){
if(jQuery(this).hasClass('active')){
jQuery(this).removeClass("active");
jQuery(this).siblings('.content').slideUp(200);

}else{

jQuery(".set > a").removeClass("active");
jQuery(this).addClass("active");
jQuery('.content').slideUp(200);
jQuery(this).siblings('.content').slideDown(200);
}
});
});

jQuery(function(){
   jQuery(".phonenum").mask("+7 (999) 999-99-99",{placeholder:"_"});
   jQuery(".namemesk").mask("aaa?aaaaaaaaaaaaaaaaa",{placeholder:""});
});  


