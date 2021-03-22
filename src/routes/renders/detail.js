const { fetcher } = require('../../utils/fetcher')

require("dotenv").config();

const detail = async (req, res) => {
  const sol = req.params.sol 
  const endpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + sol + '&page=1' + process.env.API_KEY

  let solData = await fetcher(endpoint)

  res.render('detail', {
    solData: solData.photos,
    sol: sol,
    title: 'SOL ' + sol + ' Rover Photos'
  })
}

module.exports = { detail }