// const mapaFetch = d3.json('barrios.geojson')
// const dataFetch = d3.csv('data/147_desratizacion_nuevo.csv', d3.autoType)

// Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
//     let chartMap = Plot.plot({
//         projection : {
//             type: 'mercator',
//             domain: barrios,
//         },
//         color : {
//             scheme: 'ylorbr',
//         },
//         marks : [
//             Plot.density(data, {
//                 x: 'lat',
//                 y: 'lon',
//                 fill: 'density',
//                 bandwidth: 15,
//                 threshold: 30,
//             }),
//             Plot.geo(barrios)
//         ],
//     })
//     d3.select('#chart02').append(() => chartMap)
// })

const mapaFetch2 = d3.json('barrios.geojson')
const dataFetch2 = d3.dsv(';', '147_desratizacion_nuevo.csv', d3.autoType)

Promise.all([mapaFetch2, dataFetch2]).then(([barrios, data]) => {
  
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    marks: [
      Plot.geo(barrios, {
        stroke: 'gray',
        fill: 'transparent',
        title: d => `${d.properties.BARRIO}`,
      }),
      /* Agregamos link a Palermo con la opción href */
      // Plot.geo(barrios, {
      //   href: () => 'https://es.wikipedia.org/wiki/Palermo_(Buenos_Aires)',
      //   stroke: 'black',
      //   fill: 'transparent',
      //   title: d => d.properties.BARRIO,
      //   filter: d => d.properties.BARRIO == 'PALERMO'
      // }),
      Plot.dot(data, {
        x: 'lon',
        y: 'lat',
        r: 1,
        stroke: 'none',
        fill: 'black'
      }),
    ],
    
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart02').append(() => chartMap)
})
