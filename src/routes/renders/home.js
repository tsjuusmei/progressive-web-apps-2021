const { averageTemperature } = require('../../utils/averageTemperature')
const { fetcher } = require('../../utils/fetcher')
require("dotenv").config();

const home = async (req, res) => {
  try {
    let solData = []

    let tempsEndpoint = process.env.TEMPS_ENDPOINT
    let tempData = await fetcher(tempsEndpoint)
    let avTemp = averageTemperature(tempData)

    let sol3073Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3073&page=1' + process.env.API_KEY)
    let sol3072Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3072&page=1' + process.env.API_KEY)
    let sol3071Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3071&page=1' + process.env.API_KEY)
    let sol3070Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3070&page=1' + process.env.API_KEY)
    let sol3069Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3069&page=1' + process.env.API_KEY)
    let sol3068Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3068&page=1' + process.env.API_KEY)

    solData.push(sol3073Data, sol3072Data, sol3071Data, sol3070Data, sol3069Data, sol3068Data)

    res.render('home', {
      averageTemp: avTemp,
      solData: solData,
      title: 'Mars Rover Photos'
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { home }