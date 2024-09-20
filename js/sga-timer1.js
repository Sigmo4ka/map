
//  function startTime()
//    {
//      var tm = new Date();
//      var h = tm.getUTCHours();
//      var m = tm.getUTCMinutes();
//      // var s = tm.getSeconds();
//        m=checkTime(m);
//        // s=checkTime(s);
//      // document.getElementById('txt').innerHTML=h+":"+m+":"+s;

//      var clock = document.getElementById('clockdiv');
//      var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   // var secondsSpan = clock.querySelector('.seconds');
//   // var miliseconds = clock.querySelector('.miliseconds');


//       hoursSpan.innerHTML=h;
//     minutesSpan.innerHTML=m;
//     // secondsSpan.innerHTML=s;

//     //обновлять каждые 60 сек
//      t = setTimeout('startTime()',60000);
//    };










//рабочее всё ниже
// function checkTime(i) {
//    if (i<10)
//       {
//         i="0" + i;
//      }
//     return i;
//  };
 

// function startTime()   {

//     var newDate = new Date();
//     var h = newDate.getHours();
//     var m = newDate.getMinutes();
//      m = checkTime(m);
//     var finishTime1 = newDate.getHours() + ':' + m; 

//     $('.hours').empty();
//     $('.hours').append(finishTime1); 
//     var t =  setTimeout('startTime()',60000); 
// };



// startTime();



