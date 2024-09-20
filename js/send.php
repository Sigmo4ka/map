<?php
if(isset($_POST["action"])):
	if($_POST["action"]=="sendform"):
		$e1=null;

		$name=trim($_POST["place"]);
		$name=strip_tags($place);
		if(mb_strlen($place,"utf-8")<=0):
			$e1.="1";
                        # это сообщение будет выведено в блоке div с id="error"
			print "<li>Заполните поле 'район'</li>";
		endif;
		
		// $email=trim($_POST["email"]);
		// $email=strip_tags($email);
		// if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
		// 	$e1.="1";
  //                       # это сообщение будет выведено в блоке div с id="error"
		// 	print "<li>Неверно заполнено поле 'Ваш email'</li>";
		// endif;
		

		$phone = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером



		// $mess=trim($_POST["mess"]);
		// $mess=strip_tags($mess);
		// if(mb_strlen($mess,"utf-8")<=0):
		// 	$e1.="1";
  //                       # это сообщение будет выведено в блоке div с id="error"
		// 	print "<li>Заполните поле 'Ваше сообщение'</li>";
		// endif;
		
		if($e1==null):
			// здесь мы делаем с данными, то что нам нужно
			// записываем в базу или файл
			// или отправляем их на почту
			$mail="sigm@ukr.net"; // e-mail куда уйдет письмо
			$title="Письмо с сайта makesites.in.ua"; // заголовок(тема) письма
			//конвертируем 
			$title=iconv("utf-8","windows-1251",$title);
			$title=convert_cyr_string($title, "w", "k");
		
			$message="<html><head></head><body>";
			
			$message.= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
			$message.="<b>Сообщение:</b> $name<br>";
			// ссылка на e-mail
					
			$message.="</body></html>"; 
			//конвертируем 
			$message=iconv("utf-8","windows-1251",$message);
			$message=convert_cyr_string($message, "w", "k");
			
			$headers="MIME-Version: 1.0\r\n";
			$headers.="Content-Type: text/html; charset=koi8-r\r\n";
			$headers.="From: $email\r\n"; // откуда письмо
			mail($mail, $title, $message, $headers); // отправляем
			/*
                          далее с помощью javascript мы выводим простое alert
                          уведомление
                        */
                        ?>
			<script language="JavaScript" type="text/javascript">
			$('#forms-map').trigger('reset'); /* очищаем форму */
			/* выводим уведомление об успехе
				можно использовать метод красивее простого alert				
			*/
			alert("Ваше сообщение отправлено! Спасибо!");
			</script>
			<?php
		endif;
	else:
		die;
	endif;
else:
	die;
endif;
?>