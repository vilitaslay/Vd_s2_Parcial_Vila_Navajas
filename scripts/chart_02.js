const mapaFetch = d3.json('../barrios.geojson')
const dataFetch = d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
    const reclamos = d3.group(data, d => d.domicilios_barrio)
    console.log('reclamos', reclamos)
    barrios.features.forEach(d => {
        let nombreBarrio = d.properties.BARRIO
        let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
        d.properties.DENUNCIAS = cantReclamos
    
        console.log(nombreBarrio + ': ' + cantReclamos)
      })
    
    let chart = Plot.plot({
        projection : {
            type: 'mercator',
            domain: barrios,
        },
        color : {
            scheme: 'greens',
        },
        r: {
            range: [0, 30],
        },
        marks : [
            Plot.dot(
                barrios.features,
                Plot.centroid({
                  r: d => d.properties.DENUNCIAS,
                  text: (d) => d.properties.BARRIO,
                  stroke: 'none',
                  fill: d => d.properties.DENUNCIAS > 80 ? '#af0000' : '#feca54'
                })
              ),
            Plot.geo(barrios, {
                stroke: 'gray',
                title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
            })
        ],
    })
    d3.select('#chart02').append(() => chart)
})