const fs = require('fs').promises
const plantuml = require('node-plantuml')
const streamtostring = require('stream-to-string')
const svgo = require('svgo')

module.exports = async file => {
  const pathToUml = `./src/${file}`
  const umlContents = await fs.readFile(pathToUml, 'utf8')
  const svgStream = plantuml.generate(umlContents, { format: 'svg' })
  const rawSvg = await streamtostring(svgStream.out)
  const svgOptimise = svgo.optimize(rawSvg)
  return svgOptimise.data
}
