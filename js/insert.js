$(document).ready(function(){
    $('div#insertar').dialog({
        modal: true,
        autoOpen: false,
        buttons:{
            "Insertar": function(){
                var datosInsertar = $('form#insertForm').serialize();
                $.ajax({
                    url:'php/insert.php',
                    type:'POST',
                    data:datosInsertar,
                    success: function(){
                        alert("Datos introducidos satisfactoriamente");
                        $('#list2').trigger("reloadGrid");
                    },
                    error:function(){
                        alert("Parece que hubo un error al introducir el registro");
                    }
                });
                $(this).dialog("close");
            },
            "Cancelar": function(){
                $(this).dialog("close");
            }
        }
    });
    
    $('#insertarButton').click(function(){
        $('div#insertar').dialog("open");
        $('div#insertar form#insertForm input').val("");
    });
});


