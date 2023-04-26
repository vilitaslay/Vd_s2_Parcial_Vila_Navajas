d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {  
  console.log(data)

    let chart = Plot.plot({
      height: 700,
      width: 1200,
      padding: 0.5,
      marginBottom: 100,
      marginRight: 60,
      marginTop: 40,
      insettop: 70,
      x : {
        label: null,
        labelOffset: 30,
        tickRotate: 45,
      },
      y : {
        label: "Cantidad de casos sin resolver",
        labelOffset: 30,
        domain: [0, 130],
      },
      marks : [
        Plot.barY(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({y: 'count'}, {
            x: 'domicilio_barrio',
            y: 'canal',
            fill: d => (d.domicilio_barrio == 'PALERMO' ? '#E2459B': '#DAC4E0'),
            stroke: d => (d.domicilio_barrio == 'PALERMO' ? '#E2459B': '#DAC4E0'),
            sort : {x: 'y', reverse : true}
        })),
        Plot.text(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({y: 'count'}, {
          x: 'domicilio_barrio',
          y: 'canal',
          text: ['126'],
          fill: '#E2459B',
          dy: -535,
          dx: -953,
        })),
      ], 
    })
    
    d3.select('#chart04').append(() => chart)
})