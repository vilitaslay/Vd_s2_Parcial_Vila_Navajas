d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {
    data.forEach(item => {
    let horaIngresoCompleta = d3.timeParse('%H:%M:%S')(item.hora_ingreso)
    let horaIngreso = horaIngresoCompleta.getHours()
        item.solo_hora_ingreso = horaIngreso
    }),

    console.log(data)

    let chart = Plot.plot({
      height: 800,
      width: 800,
      padding: 0.1,
      grid: true,
      marginTop: 50,
      marginLeft: 120,
      x: {
        axis: 'top',
        labelOffset: 50,
        label: "Hora del Dia"
      },
      y : {
        label: null
      },
      marks : [
        Plot.cell(data, Plot.group({fill: "count"}, {
          x: 'solo_hora_ingreso',
          y: 'domicilio_barrio',
          fill: 'prestacion',
          fillOpacity: 1,
        })),
        // Plot.text(data, Plot.group({text:"count"},{
        //   x: 'hora_new',
        //   y: 'domicilio_barrio',
        //   text: 'prestacion',
        // }),
      ],
      color : {
        type: 'linear',
        scheme: 'purd',
        legend: true,
      }
    })
    
    d3.select('#chart01').append(() => chart)
})