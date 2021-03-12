const { averageTemperature } = require('../../utils/averageTemperature')
const { fetcher } = require('../../utils/fetcher')

const home = async (req, res) => {
  try {
    let endpoint = 'https://wafs-be.herokuapp.com/temps'
    let response = await fetcher(endpoint)
    let avTemp = averageTemperature(response)
    res.render('home', {
      averageTemp: avTemp
    })
  } catch(err) {
    console.log(err)
  }
}

module.exports = { home }