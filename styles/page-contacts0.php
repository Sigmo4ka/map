<?php
/*
Template Name: Контакты
*/
?>


<?php get_header();?> 
<div class="home bg4 councont">
<div class="wrapper">
<div class="map">

<?php

    $args = array(  
    'post_type' => 'contacts',
    'order' => 'ASC',
    'posts_per_page' => -1,
    );  
    $point = new WP_Query($args);
    while($point->have_posts()) : $point->the_post();
    ?>

<a class="point scrollcountries" style="<?php echo get_field('con10');?>" href="#<?php echo get_field('con8');?>"><span>
<?php echo get_field('con1');?></span>
</a>

<?php endwhile; ?>


</div>
<a href="#contactspage" class="scrollbind"></a>
<div class="countries">
<a href="#countries1" class="scroll"><?php echo pll_e('countries1');?></a>
<a href="#countries2" class="scroll"><?php echo pll_e('countries2');?></a>
<a href="#countries3" class="scrollcountries"><?php echo pll_e('countries3');?></a>
<a href="#countries4" class="scrollcountries"><?php echo pll_e('countries4');?></a>
<a href="#countries5" class="scrollcountries"><?php echo pll_e('countries5');?></a>
<a href="#countries6" class="scrollcountries"><?php echo pll_e('countries6');?></a>
<a href="#countries7" class="scrollcountries"><?php echo pll_e('countries7');?></a>
<a href="#countries8" class="scrollcountries"><?php echo pll_e('countries8');?></a>
</div>
</div>

    

</div>

<div class="contactspage" id="contactspage">

<?php

    $h=date("H");
    $m=date("i");
    $args = array(  
    'post_type' => 'contacts',
    'order' => 'ASC',
    'posts_per_page' => -1,
    );  
    $recent = new WP_Query($args);
    while($recent->have_posts()) : $recent->the_post();
    ?>
    <div id="<?php echo get_field("con8");?>" class="contactson"  style="background-image: url('<?php echo get_field("con6");?>')">
    <div class="wrapper">
    <div class="contactinfo desctop">
        <table>
            <tr>
                <td class="inform" colspan="2"> 
                    <span class="descl"><?php echo get_field('con2');?>
                    <?php if(get_field('con9')) { ?> <a class="skyper" href="skype:<?php echo get_field('con9');?>"><?php echo get_field('con9');?></a> <?php }?>
                    </span>
                    <span class="wvib">
                    <a class="wa"></a>
                    <a class="vib"></a>
                    </span>
                </td>
            </tr>
            <tr>
                <td class="more">
                    <a class="fancybox-modal" href="#<?php echo get_field('con8');?>mod"><span><?php echo pll_e('link3');?></span></a>
                    <div style="display: none;">
                        <div class="modal callmodal" id="<?php echo get_field('con8');?>mod">
                            <div class="form">
                                <?php 
                                    if( pll_current_language() == 'cz' ) {
                                    echo do_shortcode(get_field('con11cz'));
                                    } 
                                    
                                    if( pll_current_language() == 'ru' ) {
                                    echo do_shortcode(get_field('con11'));
                                    }
                                    
                                    if( pll_current_language() == 'en' ) {
                                    echo do_shortcode(get_field('con11en'));
                                    } 
                                    
                                    ?>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="phonmor">
                    <span><?php echo get_field('con4');?></span>
                </td>
            </tr>
        </table>
    </div>
    <div class="contactinfo mobile">
        <div class="table">
           
                <div class="inform" colspan="2"> 
                    <span class="descl"><?php echo get_field('con2');?>
                    <?php if(get_field('con9')) { ?> <a class="skyper" href="skype:<?php echo get_field('con9');?>"><?php echo get_field('con9');?></a> <?php }?>
                    </span>
                    <div class="wrap">
                        <div class="phonmor">
                            <span><?php echo get_field('con4');?></span>
                        </div>
                        <span class="wvib">
                            <a class="wa"></a>
                            <a class="vib"></a>
                        </span>
                    </div>
                </div>
            
                <div class="more">
                    <a class="fancybox-modal" href="#<?php echo get_field('con8');?>mod"><span><?php echo pll_e('link3');?></span></a>
                    <div style="display: none;">
                        <div class="modal callmodal" id="<?php echo get_field('con8');?>mod">
                            <div class="form">
                                <?php 
                                    if( pll_current_language() == 'cz' ) {
                                    echo do_shortcode(get_field('con11cz'));
                                    } 
                                    
                                    if( pll_current_language() == 'ru' ) {
                                    echo do_shortcode(get_field('con11'));
                                    }
                                    
                                    if( pll_current_language() == 'en' ) {
                                    echo do_shortcode(get_field('con11en'));
                                    } 
                                    
                                    ?>
                            </div>
                        </div>
                    </div>
                </div>
                
            
        </div>
    </div>
    <?php $hou = get_field('con3');
    if( $h+$hou >= 24) {
        
        $datahour = $h+$hou-24;
    }
    else {
        $datahour = $h+$hou;
    }?>

    
    
    <div class="clockbg <?php if(get_field('con5') == 1){ echo 'clo1';} else { echo 'clo2';}?> clocks">
    <div class="js-<?php echo $hou?> clock station     clock<?php echo $datahour;?>">
    <div class="hours-container" style="">
      <div class="hours hours<?php the_ID() ?> "></div>
    </div>
    <div class="minutes-container" >
      <div class="minutes minutes<?php the_ID() ?> "></div>
    </div>
    <div class="seconds-container">
      <div class="seconds seconds<?php the_ID() ?>  "></div>
    </div>
    </div>
    <span class="hou hou<?php the_ID() ?>">
    
    <?php 
    echo $datahour;
    echo ':'. $m ?>
    
    </span>
    <span class="city">
    <?php echo get_field('con1');?></span>
    <span class="coun">
    <?php echo get_field('con7');?></span>
    
    </div>
    
    

    </div>
    </div>
    <script >
    
    
jQuery(document).ready(function() {

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    setInterval( function() {
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)";

    jQuery(".seconds<?php the_ID() ?>").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    }, 1000 );


    setInterval( function() {
    var hours = "<?php echo $datahour;?>";
    var mins = new Date().getMinutes();
    var hdegree = hours * 30 + (mins / 2);
    var hrotate = "rotate(" + hdegree + "deg)";

    jQuery(".hours<?php the_ID() ?>").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});

    }, 1000 );
 

    setInterval( function() {
    var hours = "<?php echo $datahour?>";
    var mins = new Date().getMinutes();
    var mdegree = mins * 6;
    var mrotate = "rotate(" + mdegree + "deg)";

    jQuery(".minutes<?php the_ID() ?>").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
    jQuery(".hou<?php the_ID() ?>").text(           function(index, text){
                var text = hours + ':' + addZero(mins);
           return text; 
       });
    
    }, 1000 );

    }); 
    
    
    </script >
    <?php endwhile; ?>

</div>

<?php get_template_part('soci');?>
<?php get_template_part('partners');?>
<?php get_footer(); ?>