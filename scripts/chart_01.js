d3.csv('data/147_desratizacion_nuevo.csv.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      height: 640,
      padding: 0.5,
      grid: true,
      x: {
        axis: "top",
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
          fillOpacity: 0.25,
        })),

        
      ]
    })
    
    d3.select('#chart').append(() => chart)
})