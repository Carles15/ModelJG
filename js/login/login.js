$(document).ready(function(){
    function login(){
      var datos = $('#loginForm').serialize();
      alert(datos);
      $.ajax({
          type:'POST',
          url:'php/login/login.php',
          data: datos,
          success: function(data){
              if(data === "200"){
                  window.location = "index2.html";
              }else{
                  alert(data);
              }
              
          },
          error:function(data){
              alert(data);
          }
      });  
    };
    
    $('#loginButton').click(function(){
        login();
    });
});


