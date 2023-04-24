const mapaFetch2 = d3.json('../barrios.geojson')
const dataFetch2 = d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType)

Promise.all([mapaFetch2, dataFetch2]).then(([barrios, data]) => {

  let chartMap = Plot.plot({
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      legend: true,
    },
    marks: [
      Plot.dot(data, { x: 'lon', y: 'lat', fill: 'canal', fillOpacity: 0.4, r:5}),
      Plot.geo(barrios, {
        stroke: 'gray',
        strokeWidth: 2,
        fillOpacity: 0.5,
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })
  d3.select('#chart03').append(() => chartMap)
})