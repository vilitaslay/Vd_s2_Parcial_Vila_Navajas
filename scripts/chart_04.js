d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType).then(data => {  
  console.log(data)

    let chart = Plot.plot({
      height: 800,
      width: 2000,
      padding: 0.1,
      grid: true,
      marginTop: 50,
      marginLeft: 150,
      x : {
        label: 'Estado del contacto'
      },
      y : {
        label: null,
      },
      marks : [
        Plot.barX(data.filter(d => d.estado_del_contacto == "Abierto"), Plot.group({x: 'count'}, {
            x: 'canal',
            y: 'domicilio_barrio',
            fill: d => (d.domicilio_barrio == 'PALERMO' ? '#C4195D': 'grey'),
            stroke: d => (d.domicilio_barrio == 'PALERMO' ? '#C4195D': 'grey'),
            sort : {y: 'x', reverse : true}
            
        })),
      ],
      color : {
        scheme: 'set2',
      }
    })
    
    d3.select('#chart04').append(() => chart)
})