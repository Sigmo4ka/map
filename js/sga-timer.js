
 function startTime()
   {
     var tm = new Date();
     var h = tm.getHours();
     var m = tm.getMinutes();
     var s = tm.getSeconds();
       m=checkTime(m);
       s=checkTime(s);
     // document.getElementById('txt').innerHTML=h+":"+m+":"+s;

     var clock = document.getElementById('clockdiv');
     var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  // var secondsSpan = clock.querySelector('.seconds');
  // var miliseconds = clock.querySelector('.miliseconds');


      hoursSpan.innerHTML=h;
    minutesSpan.innerHTML=m;
    // secondsSpan.innerHTML=s;


     t = setTimeout('startTime()',500);
   };

function checkTime(i) {
   if (i<10)
      {
        i="0" + i;
     }
return i;
 };
 

  
startTime();



function sga () {


   var max_number = 24;
   // var numberStep = 5;

  var padding_zeros = '';
  for(var i = 0, l = max_number.toString().length; i < l; i++) {
    padding_zeros += '0';
  }

  var padded_now, numberStep = function(now, tween) {
    var target = $(tween.elem),
        rounded_now = Math.round(now);

    var rounded_now_string = rounded_now.toString()
    padded_now = padding_zeros + rounded_now_string;
    padded_now = padded_now.substring(rounded_now_string.length);

    target.prop('number', rounded_now).text(padded_now);
  };


  // var use_max_power = $('#checkbox');
  // $('#start-campaign').click(function(){
    
        // $('#milisec').animateNumber({
        //   number: max_number,
        //             numberStep: function(now, tween) {
        //         var floored_number = Math.floor(now),
        //          rounded_now = Math.round(now);
        //             target = $(tween.elem);


        //          var rounded_now_string = rounded_now.toString()
        //         padded_now = padding_zeros + rounded_now_string;
        //         padded_now = padded_now.substring(rounded_now_string.length);


        //         target.text( padded_now );
        //       }
    
        // }, 1000);
        // $('#milisec').animateNumber({
        //   number: max_number,
        //   numberStep: numberStep
    
        // }, 1000);
        // });
}

setInterval(sga,1000);