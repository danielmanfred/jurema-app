import service from './../services/states'
import { getPopulationByLocality } from './../services/population'

const getStates = async (req, res) => {
  try {
    const states = []
    const response = await service.getAllStates()
    console.log('getting here', response)
    for (let state of response.data) {
      const population = await getPopulationByLocality(state.id)
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