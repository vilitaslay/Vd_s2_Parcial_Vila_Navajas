d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {  
  console.log(data)

    let chart = Plot.plot({
      height: 500,
      width: 1100,
      padding: 0.5,
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
            fill: d => (d.domicilio_barrio == 'PALERMO' ? '#E2459B': '#DAC4E0'),
            stroke: d => (d.domicilio_barrio == 'PALERMO' ? '#E2459B': '#DAC4E0'),
            sort : {y: 'x', reverse : true}
        })),
        Plot.text(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({x: 'count'}, {
          x: 'canal',
          y: 'domicilio_barrio',
          text: ['126'],
          fill: '#E2459B',
          dy: -623,
          dx: 1735,
        })),
      ], 
    })
    
    d3.select('#chart04').append(() => chart)
})