d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      height: 640,
      width: 640,
      padding: 0.3,
      grid: true,
      x: {
        axis: 'top',
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
      ],
      color : {
        scheme: 'orrd',
        legend: true,
      }
    })
    
    d3.select('#chart01').append(() => chart)
})