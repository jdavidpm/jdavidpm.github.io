(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('.slider').slider();
    $('.tooltipped').tooltip();
    $('.dropdown-trigger').dropdown({
        constrainWidth: false,
        coverTrigger: false,
        closeOnClick: true,
        alignment: 'right'
      }
    );
  });
})(jQuery);
