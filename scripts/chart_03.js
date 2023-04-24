const mapaFetch = d3.json('../palermo.geojson')
const dataFetch = d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType)

d3.json('../palermo.geojson').then((palermo) => {
    // const reclamos = d3.group(data, d => d.domicilios_barrio)
    // console.log('reclamos', reclamos)
    // barrios.features.forEach(d => {
    //     let nombreBarrio = d.properties.BARRIO
    //     let cantReclamos =  reclamosPorBarrio.get(nombreBarrio).length
    //     d.properties.DENUNCIAS = cantReclamos
    
    //     console.log(nombreBarrio + ': ' + cantReclamos)
    // })
    
    let chart = Plot.plot({
        projection : {
            type: 'mercator',
            domain: palermo,
        },
        color : {
            scheme: 'greens',
        },
        marks : [
            // Plot.dot(data, plot.group({fill:'count'}, {
            //     x: 'lat',
            //     y: 'lon',
            //     fill: 'prestacion'
            // })),
            Plot.geo(palermo)
        ],
    })
    d3.select('#chart03').append(() => chart)
})