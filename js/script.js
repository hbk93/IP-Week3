// $(document).ready(function(){
//   $("#design-image").click(function(){
//     $("#design-image").slideDown('1500').hide('1000');
//     $("#design").show('1500');
//   });

// $(document).ready(function() {
//   $("#design").click(function() {
//     $("#design").show();
//   });
// });

$(document).ready(function(){  
  $("#design").click(function(){
    $("#design").toggle();
    $("#design").toggle();
  });
  $("#design_image").click(function(){
    $("#design_image").slideDown('1500').hide('1000');
    $("#design_image").show('1500');
  });
});