$( document ).ready(function() {
  icon();
  $(".header-text > h1").fadeIn(3000);
  $(".header-text > p").fadeIn(5000);
});

function icon(){
  let icon = new Vivus('icon', {
    type: 'delayed',
    duration: 80
  });
}
