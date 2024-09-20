<?php
/**
 * Функции шаблона (function.php)
 * @package WordPress
*/

 
require_once (TEMPLATEPATH . '/functions/metabox.php');
require_once (TEMPLATEPATH . '/functions/custom.php');
require_once (TEMPLATEPATH . '/functions/administrator.php');



function typical_title() { 
	global $page, $paged; 
	wp_title('|', true, 'right'); 
	$site_description = get_bloginfo('description', 'display'); 
    if (is_home() || is_front_page()) {
         bloginfo('name'); 
         if ($site_description ) echo " |"; 
    }
          
	if ($site_description ) 
		echo "  $site_description"; 
     
	if ($paged >= 2 || $page >= 2) 
		echo ' | '.sprintf(__( 'Страница %s'), max($paged, $page)); 
}


register_nav_menus(array( 
	'top' => 'Главное меню'
));


if (function_exists('add_theme_support')) {
    add_theme_support('menus');
}




function enqueue_styles() {
	
	wp_enqueue_style( 'fonts', get_template_directory_uri() . '/fonts.css');
	
    wp_enqueue_style( 'style-name', get_stylesheet_uri());
	wp_enqueue_style( 'style_wp', get_template_directory_uri() . '/style_wp.css');
	
	wp_enqueue_style( 'slick', get_template_directory_uri() . '/slick/slick.css');
	
	wp_enqueue_style( 'fancybox', get_template_directory_uri() . '/fancybox/jquery.fancybox.css');
	wp_enqueue_style( 'animate', get_template_directory_uri() . '/fancybox/animate.css');
	
	wp_enqueue_style( 'rasponsiv', get_template_directory_uri() . '/rasponsiv.css');
	wp_enqueue_style( 'rasponsivsga', get_template_directory_uri() . '/rasponsivsga.css');

}
add_action('wp_enqueue_scripts', 'enqueue_styles');

function my_scripts_method() {
	wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '//code.jquery.com/jquery-1.11.0.min.js');
    wp_enqueue_script( 'jquery' );
    
	wp_deregister_script( 'jquery-migrate' );
    wp_register_script( 'jquery-migrate', '//code.jquery.com/jquery-migrate-1.2.1.min.js');
    wp_enqueue_script( 'jquery-migrate' );
	
	wp_register_script( 'jquery.maskedinput',get_template_directory_uri() .  '/js/jquery.maskedinput.js');
    wp_enqueue_script( 'jquery.maskedinput' );
	
	wp_register_script( 'slick',get_template_directory_uri() .  '/slick/slick.js');
    wp_enqueue_script( 'slick' );
	
	wp_register_script( 'fancybox',get_template_directory_uri() .  '/fancybox/jquery.fancybox.js');
    wp_enqueue_script( 'fancybox' );
    
	wp_register_script( 'circle',get_template_directory_uri() .  '/js/circle-progress.js');
    wp_enqueue_script( 'circle' );
    
	wp_register_script( 'appear',get_template_directory_uri() .  '/js/jquery.appear.js');
    wp_enqueue_script( 'appear' );
    
	wp_register_script( 'moment',get_template_directory_uri() .  '/js/moment.js');
    wp_enqueue_script( 'moment' );
    
	wp_register_script( 'queryLoader',get_template_directory_uri() .  '/js/queryloader2.js');
    wp_enqueue_script( 'queryLoader' );
	
	

    

    
	wp_register_script( 'main',get_template_directory_uri() .  '/js/main.js');
    wp_enqueue_script( 'main' );
	
}    
 
add_action( 'wp_enqueue_scripts', 'my_scripts_method' );







show_admin_bar(false);


add_theme_support('post-thumbnails'); 
set_post_thumbnail_size(250, 150); 
add_image_size('big-thumb', 400, 400, true); 



register_sidebar(
array( 
	'name' => 'Колонка слева', 
	'id' => "left-sidebar", 
	'description' => 'Обычная колонка в сайдбаре', 
	'before_widget' => '<div id="%1$s" class="widget %2$s">', 
	'after_widget' => "</div>\n", 
	'before_title' => '<span class="widgettitle">', 
	'after_title' => "</span>\n",
));



function pagination() { 
	global $wp_query; 
	$big = 999999999; 
	echo paginate_links(array( 
		'base' => str_replace($big,'%#%',esc_url(get_pagenum_link($big))), 
		'format' => '?paged=%#%', 
		'current' => max(1, get_query_var('paged')), 
		'type' => 'list', 
		'prev_text'    => 'Назад', 
    	'next_text'    => 'Вперед',
		'total' => $wp_query->max_num_pages,
		'show_all'     => false, 
		'end_size'     => 15, 
		'mid_size'     => 15, 
		'add_args'     => false, 
		'add_fragment' => '',	
		'before_page_number' => '', 
		'after_page_number' => ''
	));
}



//отключаем смайлы
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );



?>
