const mapaFetch = d3.json('../barrios.geojson')
const dataFetch = d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType)

Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {

  let chartMap = Plot.plot({
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      legend: true,
    },
    marks: [
      Plot.density(data, { x: 'lon', y: 'lat', fill: d => (d.estado_del_contacto == 'Abierto' ? 'purple' : 'transparent'), bandwidth: 15, thresholds: 15, fillOpacity: 0.15}),
      Plot.geo(barrios, {
        stroke: 'gray',
        strokeWidth: 2,
        fillOpacity: 0.5,
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
  })
  d3.select('#chart02').append(() => chartMap)
})