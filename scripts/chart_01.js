d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {
    data.forEach(item => {
    let horaIngresoCompleta = d3.timeParse('%H:%M:%S')(item.hora_ingreso)
    let horaIngreso = horaIngresoCompleta.getHours()
        item.solo_hora_ingreso = horaIngreso
    }),

    console.log(data)

    let chart = Plot.plot({
      height: 600,
      width: 600,
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
        Plot.cell(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({fill: "count"}, {
          x: 'solo_hora_ingreso',
          y: 'domicilio_barrio',
          fill: 'prestacion',
          fillOpacity: 1,
        })),
      ],
      color : {
        type: 'linear',
        scheme: 'purd',
        legend: true,
      }
    })
    
    d3.select('#chart01').append(() => chart)
})