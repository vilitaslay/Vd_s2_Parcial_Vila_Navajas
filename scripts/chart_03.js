const mapaFetch2 = d3.json('data/barrios.geojson')
const dataFetch2 = d3.dsv(';', 'data/147_desratizacion.csv', d3.autoType)

Promise.all([mapaFetch2, dataFetch2]).then(([barrios, data]) => {

  let chartMap = Plot.plot({
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      legend: true,
      range: ['#C4195D','#169c81' ,'#DAC4E0'],
    },
    marks: [
      Plot.dot(data.filter(d => d.estado_del_contacto == "Abierto"), { x: 'lon', y: 'lat', fill: d => (d.canal == 'App BA 147' ? 'App' : (d.canal == 'GCS Web' ? 'Web' : 'otros')), fillOpacity:  0.6, r: 4.5}),
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