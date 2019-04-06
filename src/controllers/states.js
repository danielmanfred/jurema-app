import service from './../services/states'
import populationService from './../services/population'

/**
 * Recupera a lista de estados direto do banco de IBGE
 * 
 * @param {*} req Requisição HTTP 
 * @param {*} res Resposta HTTP
 * @returns {json}
 */
const getStates = async (req, res) => {
  try {
    const states = []
    const response = await service.getAllStates()
    
    for (let state of response.data) {
      const population = await populationService.getPopulationByLocality(state.id)
      states.push({
        nome: state.nome,
        uf: state.sigla,
        populacao: population
      })
    }

    res.json({
      estados: states
    })
  }
  catch(err) {
    res.status(400).json({ error: err.message })
  }
}

export default {
  getStates
}