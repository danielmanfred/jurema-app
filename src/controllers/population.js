import service from './../services/population'

const getStatePopulation = async (req, res) => {
  try {
    let uf = (req.params.uf).toUpperCase()
    const response = await service.getStatePopulation(uf)
    
    res.json(response)
  }
  catch(err) {
    res.status(400).json({ error: err.message })
  }
}

export default {
  getStatePopulation
}