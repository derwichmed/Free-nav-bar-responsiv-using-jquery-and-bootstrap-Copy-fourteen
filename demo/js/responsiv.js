$(function (){
   $('.menu_item').hover(function (){
        $('.sub_menu:visible').hide();
        $(this).find('> .sub_menu_gabarie > .sub_menu').show()
   });
   isMenuHidden = true;
   $('.nav_home img:nth-child(1)').click(function (){
       if(isMenuHidden){
        isMenuHidden = false;
        $('.menu').show();
        $('.menu').css('top','0');
        $('.menu').animate({
            top: "50px"
        }, 150);
       }
       else{
         $('.menu').hide();
         isMenuHidden = true;
       }
   });
});