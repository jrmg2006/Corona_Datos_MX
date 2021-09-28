$(function() {
  
    $("form[name='registro']").validate({
  
      rules: {
  
        nombre:{
          required:true
        },
  
        email: {
          required: true,
          email: true
        },
        indicativo:"required",
        telefono:{
          required:true,
          minlength: 10,
          maxlength: 10,
          digits:true
        },
        fecha:{
          required:true,
          date:true
        },
        tcpp:{
          required: true
        }
  
      },
  
      messages: {
  
        nombre:{
          required:"Por favor, ingrese su nombre"
        },
  
        email:{
          required:"Por favor, ingrese una dirección de correo electrónico válida",
          email:"Ingrese un email valido con @ y .com, .net..etc al final"
        },
        indicativo:{
          required:"Por favor, ingresa indicativo"
        },
        telefono:{
          required:"Por favor, ingrese un número de telefono valido",
          digits:"Solo se aceptan números",
          minlength:"Ingrese minimo 10 digitos",
          maxlength: "Ingrese maximo 10 digitos"
          
        },
        fecha:{
          required:"Por favor, ingresa tu fecha de nacimiento"
        },
        tcpp:{
          required:"Por favor, selecciona esta casilla"
        }
        

  
      },
  
      submitHandler: function(form) {
  
        form.submit();
  
      }
  
    });
  
  });
