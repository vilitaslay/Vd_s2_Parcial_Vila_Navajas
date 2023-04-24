d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      height: 800,
      width: 800,
      padding: 0.1,
      grid: true,
      marginTop: 50,
      marginLeft: 150,
      x: {
        axis: 'top',
        labelOffset: 50,
        label: "Hora del Dia"
      },
      y : {
        label: "Barrio"
      },
      marks : [
        Plot.cell(data, Plot.group({fill: "count"}, {
          x: 'hora_new',
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