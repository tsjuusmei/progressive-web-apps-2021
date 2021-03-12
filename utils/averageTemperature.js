const averageTemperature = (data) => {
  let averageTemps = []
  let temps = null

  data.forEach(obj => {
    averageTemps.push(obj.temps.average)
  });

  for (let i = 0; i < averageTemps.length; i++) {
    temps += averageTemps[i]
  }

  const averageTemp = temps / averageTemps.length

  return averageTemp.toFixed(2)
}

module.exports = { averageTemperature }