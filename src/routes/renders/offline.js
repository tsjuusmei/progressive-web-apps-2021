const offline = async (req, res) => {
  try {
    res.render('offline', {
      title: "offline"
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { offline }