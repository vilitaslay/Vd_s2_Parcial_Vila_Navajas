d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType).then(data => {
    console.log(data)

    let chart = Plot.plot({
      height: 800,
      width: 800,
      padding: 0.1,
      grid: true,
      marginTop: 50,
      marginLeft: 150,
      x : {
        label: 'Estado del contacto'
      },
      marks : [
        Plot.barY(data, Plot.group({y: 'count'}, {
            x: 'estado_del_contacto',
            y: 'frequency',
            fill: '#C4195D'
          
        })),
      ],
      color : {
        scheme: 'set2',
      }
    })
    
    d3.select('#chart04').append(() => chart)
})