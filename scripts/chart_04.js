d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {  
  console.log(data)

    let chart = Plot.plot({
      height: 800,
      width: 2000,
      padding: 0.1,
      grid: true,
      marginTop: 50,
      marginLeft: 150,
      insetRight: 40,
      x : {
        label: 'Estado del contacto',
        labelOffset: 30,
      },
      y : {
        label: null,
      },
      marks : [
        Plot.barX(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({x: 'count'}, {
            x: 'canal',
            y: 'domicilio_barrio',
            fill: d => (d.domicilio_barrio == 'PALERMO' ? '#C4195D': '#c4babe'),
            stroke: d => (d.domicilio_barrio == 'PALERMO' ? '#C4195D': '#c4babe'),
            sort : {y: 'x', reverse : true}
        })),
        Plot.text(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({x: 'count'}, {
          x: 'canal',
          y: 'domicilio_barrio',
          text: ['126'],
          fill: '#c4195d',
          dy: -628,
          dx: 1735,
        })),
      ], 
    })
    
    d3.select('#chart04').append(() => chart)
})