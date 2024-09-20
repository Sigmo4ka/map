jQuery(function() {


// связь карты, названий и списков

    $('.map').maphilight();

	$( ".karta-bg-content-cities-ul li a" ).hover(
		function () {
			if (!$('#f' + $(this).attr('id').substr(1) + ':hover').length > 0) {
	     	$('#f' + $(this).attr('id').substr(1)).mouseover();
	     }
		}, function () {
	     	$('#f' + $(this).attr('id').substr(1)).mouseout();
		}
	);


	$( ".area-maping" ).hover(
	  function() {
	     	$('.name' + $(this).attr('id').substr(1)).css('display','block');
	  	$('#n' + $(this).attr('id').substr(1)).addClass('active-class');
	  }, function() {
	  	$('#n' + $(this).attr('id').substr(1)).removeClass('active-class');

	  	if (!$('.name' + $(this).attr('id').substr(1) + ':hover').length > 0) {
	     	$('.name' + $(this).attr('id').substr(1)).css('display','none');
	  	}

	  }
	);




	$( ".map-name" ).hover(
	  function() {
	  	$('#n' + $(this).attr('class').substr(13)).addClass('active-class');
	  },
	  function() {
  		if (!$('#f' + $(this).attr('class').substr(13) + ':hover').length > 0) {
	     	$(this).css('display','none');
	  		$('#n' + $(this).attr('class').substr(13)).removeClass('active-class');
  		}
	  }
	);
	


	// массив с данными
	var array_form = {
		"place": [
		{"name": 'Москва'},
		{"name": 'Москва', "phon": " +7-903-136-27-27", "phon2": " 8(499) 136 27 27",  "skyppe": "moscow@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/moskow.png", "hourr" : "3"},
		{"name": 'Архангельск', "phon": " +7-965-734-76-72", "phon2": "", "skyppe": "arhangelsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/arhangelsk.png", "hourr" : "3"},
		{"name": 'С-Петербург', "phon": "+7-911-925-97-75", "phon2": "8(812) 925 97 75",  "skyppe": "saint-petersburg@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/piter.png", "hourr" : "3"},
		{"name": 'Минск', "phon": "+375-33-375-17-57 ",  "phon2": "", "skyppe": "minsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/minsk.png", "hourr" : "3"},
		{"name": 'Прага', "phon": "", "phon2": "420-702-925-170", "skyppe": "prague@pv-student.cz", "adressee": "Pitterova 2855/9b", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/praga.png", "hourr" : "2"},
		{"name": 'Киев', "phon": " +38-96-888-76-88",  "phon2": "", "skyppe": "kiev@pv-student.cz", "adressee":"", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/kiev.png", "hourr" : "3"},
		{"name": 'Мурманск', "phon": "+7-964-680-16-57", "phon2": "8(152) 601-657", "skyppe": "murmansk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/http://pv-student.cz/wp-content/themes/Mrabos/images/city/murmansk.png", "hourr" : "3"},
		{"name": 'Воронеж', "phon": "7-903-652-91-55",  "phon2": "", "skyppe": "voronezh@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/moskow.png", "hourr" : "3"},
		{"name": 'Сочи', "phon": "  +7-967-696-95-57",  "phon2": "8(8622) 969-557", "skyppe": "sochi@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/sochi.png", "hourr" : "3"},
		{"name": 'Н-Новгород', "phon": "+7-905-290-84-12",  "phon2": "", "skyppe": "nnovgorod@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/novgorod.png", "hourr" : "3"},
		{"name": 'Краснодар', "phon": " +7-903-412-10-57",  "phon2": "", "skyppe": "krasnodar@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/krasnodar.png", "hourr" : "3"},
		{"name": 'Ставрополь', "phon": " +7-903-411-75-57",  "phon2": "8(619) 44 75 57", "skyppe": "stavropol@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/stavropol.png", "hourr" : "3"},
		{"name": 'Грозный', "phon": "+7-967-951-82-27",  "phon2": "", "skyppe": "groznyi@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/grozniy.png", "hourr" : "3"},
		{"name": 'Махачкала', "phon": "+7-903-477-02-08",  "phon2": "", "skyppe": "mahachkala@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/mahachkala.png", "hourr" : "3"},
		{"name": 'Ереван', "phon": "+374-43-000-157",  "phon2": "", "skyppe": "yerevan@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/erevan.png", "hourr" : "4"},
		{"name": 'Баку', "phon": "+374 43 000 157",  "phon2": "", "skyppe": "baku@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/baku.png", "hourr" : "4"},
		{"name": 'Бишкек', "phon": "+996-770-076-767  ",  "phon2": "", "skyppe": "bishkek@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/bishkek.png", "hourr" : "6"},
		{"name": 'Надым', "phon": "+7-912-912-66-22",  "phon2": "", "skyppe": "nadym@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/nadim.png", "hourr" : "5"},
		{"name": 'Казань', "phon": "+7-966-250-07-37",  "phon2": "8(843) 250-07-37", "skyppe": "kazan@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/kazan.png", "hourr" : "3"},
		{"name": 'Уфа', "phon": "+7-960-800-45-57",  "phon2": "8(347) 299-45-57", "skyppe": "ufa@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/ufa.png", "hourr" : "5"},
		{"name": 'Екатеринбург', "phon": "+7-967-639-75-09",  "phon2": "8(3433) 46 75 09", "skyppe": "yekaterinburg@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/ekaterin.png", "hourr" : "5"},
		{"name": 'Челябинск', "phon": "+7-962-485-08-57",  "phon2": "8(351)216-08-57", "skyppe": "chelyabinsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/chelyabinsk.png", "hourr" : "5"},
		{"name": 'Х-мансийск', "phon": "+7-909-712-61-21",  "phon2": "", "skyppe": "h.mansiysk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/h-mansiisk.png", "hourr" : "5"},
		{"name": 'Тюмень', "phon": "+7-963-452-04-27",  "phon2": "", "skyppe": "tyumen@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/tumen.png", "hourr" : "5"},
		{"name": 'Норильск', "phon": "+7-913-498-11-77",  "phon2": "8(3919) 38 11 77", "skyppe": "norilsk@pv-student.cz", "adressee": "СРК 'АРЕНА' пл.Металлургов, д.10, 2й этаж", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/norilsk.png", "hourr" : "7"},
		{"name": 'Н. уренгой', "phon": "8919-559-23-32",  "phon2": "", "skyppe": "urengoi@pv-student.cz", "adressee": "ДЦ 'Партнер' пр. Губкина 14 А, оф 409/4", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/yrengoi.png", "hourr" : "5"},
		{"name": 'Ноябрьск', "phon": "+7-919-559-22-79",  "phon2": "8(3496) 39 22 79 ", "skyppe": "noyabrsk@pv-student.cz", "adressee": "ул.Советская, д.71, оф.1", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/noyab.png", "hourr" : "5"},
		{"name": 'Сургут', "phon": "",  "phon2": "", "skyppe": "surgut@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/surgut.png", "hourr" : "5"},
		{"name": 'Нижневартовск', "phon": "+7-982-537-74-49",  "phon2": "8(3466) 27 74 49", "skyppe": "nizhnevartovsk@pv-student.cz", "adressee": "ТРЦ 'ЮГРА МОЛЛ' ул.Ленина, д.15П, оф.303 ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/nijnevart.png", "hourr" : "6"},
		{"name": 'Омск', "phon": "+7-962-058-77-97",  "phon2": "8(3812) 637-797", "skyppe": "omsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/omsk.png", "hourr" : "6"},
		{"name": 'Астана', "phon": "77714635551",  "phon2": "", "skyppe": "astana@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/astana.png", "hourr" : "6"},
		{"name": 'Новосибирск', "phon": "+7-962-825-67-67 ",  "phon2": "8(3833) 58 67 67", "skyppe": "novosibirsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/novosib.png", "hourr" : "7"},
		{"name": 'Бишкек', "phon": "+996-770-076-767  ",  "phon2": "", "skyppe": "bishkek@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/moskow.png", "hourr" : "6"},
		{"name": 'Красноярск', "phon": "+7-913-030-17-57",  "phon2": "8(391) 280 17 57", "skyppe": "krasnoyarsk@pv-student.cz", "adressee": "ул.Авиаторов, д.38, оф.241", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/krasnoyarsk.png", "hourr" : "7"},
		{"name": 'Иркутск', "phon": "+7-964-651-11-77",  "phon2": "8(3952) 91 11 77", "skyppe": "irkutsk@pv-student.cz", "adressee": "БЦ 'Сотня' ул. Фридриха Энгельса 17, оф 705", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/irkutsk.png", "hourr" : "8"},
		{"name": 'Якутск', "phon": " +7-968-154-01-17",  "phon2": "", "skyppe": "yakutsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/yakutsk.png", "hourr" : "9"},
		{"name": 'Хабаровск', "phon": "+7-909-825-30-27",  "phon2": "8(4212) 643-027", "skyppe": "habarovsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/habarovsk.png", "hourr" : "10"},
		{"name": 'П-Камчатский', "phon": "+7-963-834-4-817",  "phon2": "", "skyppe": "petrpavkam@pv-student", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/kamchat.png", "hourr" : "12"},
		{"name": 'Ю-Сахалинск', "phon": "+7-962-127-05-46",  "phon2": "8(4242) 610-546", "skyppe": "yu.sakhalinsk@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/moskow.png", "hourr" : "11"},
		{"name": 'Владивосток', "phon": "+7-967-958-71-47",  "phon2": "", "skyppe": "vladivostok@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/vladivostok.png", "hourr" : "10"},
		{"name": 'Ташкент', "phon": "",  "phon2": "", "skyppe": "tashkent@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/tashkent.png", "hourr" : "5"},
		{"name": 'Душанбе', "phon": "",  "phon2": "", "skyppe": "dushanbe@pv-student.cz", "adressee": "МЕНЕДЖЕР ПРИЕДЕТ К ВАМ", "image" : "http://pv-student.cz/wp-content/themes/Mrabos/images/city/dushanbe.png", "hourr" : "5"}
		]
	};



	// функция передачи данных из массива
	function sendfromform(id) {
		$('#place').attr('value', array_form.place[id].name);
		// $('.overlay').css('display','block');
		// $('.form-map').css('display','block');
		$('.rayon').empty();
		$('.rayon').append(array_form.place[id].name);

		var phon = '';
		$('.phonne').empty();
		$('.phonne').append(array_form.place[id].phon);
		var phon2 = '';
		$('.phonne2').empty();
		$('.phonne2').append(array_form.place[id].phon2);
		var skyppe = '';
		$('.skyperr').empty();
		$('.skyperr').append(array_form.place[id].skyppe);
		var adressee = '';
		$('.adresse').empty();
		$('.adresse').append(array_form.place[id].adressee);

		var image = '';
		$('.bg-image').empty();
		$('.bg-image').attr("src",array_form.place[id].image);

		//текущее время в каждом городе	
		function startTimeCity()   {
			var hourr = '';
	  		var newDate = new Date();
			newDate.setMilliseconds(array_form.place[id].hourr * 60 * 60 * 1000);  // +кол-во часов из массива вверху
			var sga_minute = newDate.getUTCMinutes();
			sga_minute = checkTime(sga_minute);
			var finishTime = newDate.getUTCHours() + ':' + sga_minute;		

			$('.hourss').empty();
			$('.hourss').append(finishTime);	
			// setTimeout(startTimeCity,60000); 
			// console.log('hello');
		}
		
		//если меньше 10, то добавлять 0
		function checkTime(i) {
		   if (i<10)
		      {
		        i="0" + i;
		     }
		    return i;
		 };
 

		startTimeCity();

		 // setTimeout(startTimeCity,10000);
		
	};

	// события вызова формы
	$(document).on('click', '.map-name', function(){
	  sendfromform($(this).attr('class').substr(13));	  
	  return false
	});

	$(document).on('click', '.area-maping', function(){
	  sendfromform($(this).attr('id').substr(1));
	  return false
	});



	$(document).on('click', '.karta-bg-content-cities-ul li a', function (){
	  sendfromform($(this).attr('id').substr(1));
	  // function ssga2() {
	  // 	sendfromform($('.karta-bg-content-cities-ul li a').attr('id').substr(1));
	  // }
	  // 	 	 setTimeout(ssga2(),10000);
	  return false
	});


	// $(document).on('click', '.karta-bg-content-cities-ul li a', sgaf());
	// function sgaf()	{
	//   sendfromform($(this).attr('id').substr(1));	  
	//  //  var y2=sendfromform($(this).attr('class').substr(13));
	//  // setTimeout('',10000);
	//   return false
	// };
	
	//автоклик по москве при загрузке
	$(document).ready(function(){
		$('#n1').trigger('click'); 
	});
	

	//при загрузке страницы сразу выводить время



});







