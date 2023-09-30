      // Obtenemos la fecha actual
      const fechaSistema = new Date();

      // Obtenemos el año actual
      const CurrentYear = fechaSistema.getFullYear();

      // Imprimimos el año en la etiqueta <span>
      document.getElementById("year").innerHTML = CurrentYear;

