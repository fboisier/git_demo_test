
    function convertTemperature(value, unit) {
        // Variables para almacenar el resultado y la unidad de medida convertida
        var result;
        var convertedUnit;

        // Verificar si la unidad de medida proporcionada es 'C' o 'F'
        if (unit.toUpperCase() === 'F') {
            // Convertir de Celsius a Fahrenheit
            result = (value * 9/5) + 32;
            convertedUnit = 'F';
        } else if (unit.toUpperCase() === 'C') {
            // Convertir de Fahrenheit a Celsius
            result = (value - 32) * 5/9;
            convertedUnit = 'C';
        } else {
            // En caso de que la unidad de medida no sea ni 'C' ni 'F', lanzar un error
            throw new Error('La unidad de medida debe ser \'C\' o \'F\'');
        }
        return  parseInt(result);
    }


        $("li").click(()=> alert("Hizo CLIC!"));

        $("#temperatura").change(function(){
            var valor = $(this).val();
            console.log(valor);

            $(".numero").each(function(index, element){
                var numeroActual = parseInt($(element).text());
                var numeroConvertido = convertTemperature(numeroActual, valor);
                $(this).text(numeroConvertido);
            });

        });