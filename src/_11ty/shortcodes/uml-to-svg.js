const fs = require('fs').promises
const nomnoml = require('nomnoml')
const svgo = require('svgo')

const theme = `
#arrowSize: 1
#bendSize: 0.3
#direction: down
#gutter: 5
#edgeMargin: 0
#gravity: 1
#edges: rounded
#background: transparent
#fill: transparent
#fillArrows: false
#font: system-ui, sans-serif
#fontSize: 12
#leading: 1.25
#lineWidth: 3
#padding: 8
#spacing: 40
#stroke: currentColor
#zoom: 1
#acyclicer: greedy
#ranker: network-simplex
`.trim()

module.exports = async file => {
  const pathToUml = `./src/${file}`
  const umlContents = await fs.readFile(pathToUml, 'utf8')
  const rawSvg = nomnoml.renderSvg(`${theme}\n${umlContents}`)
  const svgOptimise = svgo.optimize(rawSvg)
  return svgOptimise.data
}
