const { averageTemperature } = require('../../utils/averageTemperature')
const { fetcher } = require('../../utils/fetcher')
require("dotenv").config();

const home = async (req, res) => {
  try {
    let solData = []

    let tempsEndpoint = process.env.TEMPS_ENDPOINT
    let tempData = await fetcher(tempsEndpoint)
    let avTemp = averageTemperature(tempData)

    let sol3058Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3058&page=1' + process.env.API_KEY)
    let sol3057Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3057&page=1' + process.env.API_KEY)
    let sol3056Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3056&page=1' + process.env.API_KEY)
    let sol3055Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3055&page=1' + process.env.API_KEY)
    let sol3054Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3054&page=1' + process.env.API_KEY)
    let sol3053Data = await fetcher('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3053&page=1' + process.env.API_KEY)

    solData.push(sol3058Data, sol3057Data, sol3056Data, sol3055Data, sol3054Data, sol3053Data)

    console.log(solData.length)

    res.render('home', {
      averageTemp: avTemp,
      solData: solData,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { home }