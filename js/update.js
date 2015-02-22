$(document).ready(function () {
    $('#actualizar').dialog({
        modal: true,
        autoOpen: false,
        buttons: {
            "Actualizar": function () {
                var datosActualizar = $('form#updateForm').serialize();
                $.ajax({
                    url: 'php/update.php',
                    type: 'POST',
                    data: datosActualizar,
                    success: function () {
                        alert("Datos actualizados satisfactoriamente");
                        $('#list2').trigger("reloadGrid");
                    },
                    error: function () {
                        alert("Parece que hubo un error al actualizar el registro");
                    }
                });
                $(this).dialog("close");
            },
            "Cancelar": function () {
                $(this).dialog("close");
            }
        }
    });

    $('#actualizarButton').click(function () {
        var id = $('#list2').jqGrid('getGridParam', 'selrow');
        if (id) {
            $('#actualizar').dialog("open");
            var datos = $('#list2').jqGrid('getRowData',id);
            $("div#actualizar form#updateForm input[name='id']").val(datos.id);
            $("div#actualizar form#updateForm input[name='usuario']").val(datos.usuario);
            $("div#actualizar form#updateForm input[name='password']").val(datos.password);
        } else {
            alert("Elija un registro y vuelva a intentarlo");
        }
    });
});


