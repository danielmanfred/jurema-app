import service from './../services/population'

/**
 * Recupera a população do estado direto do IBGE
 * 
 * @param {*} req Requisição HTTP
 * @param {*} res Resposta HTTP
 * @returns {json}
 */
const getStatePopulation = async (req, res) => {
  try {
    let uf = req.params.uf 
    uf = uf ? uf.toUpperCase() : 'BR'
    
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