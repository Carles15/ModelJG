$(document).ready(function(){
    $('#borrarButton').click(function(){
        var id = $('#list2').jqGrid('getGridParam','selrow');
        if(id){
            var datos = $('#list2').jqGrid('getRowData',id);
            var idBorrar = datos.id;
            $.ajax({
                type:'GET',
                url: 'php/delete.php?id='+idBorrar,
                data: idBorrar,
                success: function(){
                    alert("Registro Borrado con éxito");
                    $('#list2').trigger("reloadGrid");
                },
                error: function(){
                    alert("Error al borrar el registro indicado");
                }
            })
        }else{
            alert("Selecccione un registro e intentelo de nuevo");
        }
    });
});

