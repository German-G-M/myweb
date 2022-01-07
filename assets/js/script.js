$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(this).css({
        "width":"50px", // no puedo alargar el boton del tooltip
    })
  })
  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente")
  })
  $("b").dblclick(function(){
      $(this).css({
          "color": "red"
      })

  })
  $(".card-title").click(function(){
      $(".card-text").toggle();
  })
  