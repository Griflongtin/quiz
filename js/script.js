$(document).ready(function(){
  $("form#personality_survey").submit(function(event){
    event.preventDefault();
    $("#good-responses").show();
    $("input:checkbox[name=good-traits]:checked").each(function(){
      var goodtraitsMode = $(this).val();
      $('#good-responses').append(goodtraitsMode + "<br>");
    });
    $("#bad-responses").show();
    $("input:checkbox[name=bad-traits]:checked").each(function(){
      var badtraitsMode = $(this).val();
      $('#bad-responses').append(badtraitsMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
