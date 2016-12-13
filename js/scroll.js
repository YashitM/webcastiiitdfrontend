$(document).ready(function (){
  $("#HomeButton").click(function(){                
       $('html, body').animate({
            scrollTop: 0
      }, 600);      
      return false;         
  });
  $("#HomeButton1").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 600);      
        return false;         
    });
  $("#HomeButton2").click(function(){                
         $('html, body').animate({
              scrollTop: 0
        }, 600);      
        return false;         
    });
  $("#PreviousButton").click(function(){                
         $('html, body').animate({
              scrollTop: $("#prevevent").offset().top - 49
        }, 600);        
        return false;       
    });
});