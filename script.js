$(document).ready(function(){
   $('.catch').mouseenter(function(){
      $(this).css({
         "left": `${rand(200)}px`,
         "top": `${rand(400)}px`,
         "background" : `rgb(${rand(256)},${rand(256)},${rand(256)})`
      })
   });

   $("#up").click(function(){
      $('.move').css({
         top: '-=10px'
      })
   });
   
   $("#down").click(function(){
      $('.move').css({
         top: '+=10px'
      })
   });

   $("#left").click(function(){
      $('.move').css({
         left: '-=10px'
      })
   });

   $("#right").click(function(){
      $('.move').css({
         left: '+=10px'
      })
   });

   $('.catch').click(function(){
      alert('Width:     '+ $(this).width()
             +'px\nHeight:    ' + $(this).height() + 'px');
   });

   $("#rightW").click(function(){
      $('.move').width($('.move').width() + 10)
   });

   $("#leftW").click(function(){
      $('.move').width($('.move').width() - 10)
   });

   $("#upH").click(function(){
      $('.move').height($('.move').height() + 10)
   });

   $("#downH").click(function(){
      $('.move').height($('.move').height() - 10)
   });

   $('#change').click(function(){
      let w = $('#w').val();
      let h = $('#h').val();

      if (w.search('%') != -1){
         $('.catch').width(`${w}`);
      } else if (w.search('px') != -1) {
         $('.catch').width(`${w.slice(0, -2)}`);
      }

      if (h.search('%') != -1){
         $('.catch').height(`${h}`);
      } else if (h.search('px') != -1) {
         $('.catch').height(`${h.slice(0, -2)}`);
      }
   })
})

function rand (max){
   return Math.floor(Math.random()*max);
}