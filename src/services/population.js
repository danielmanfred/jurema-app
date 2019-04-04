import axios from 'axios'
import { getIdByInitials } from './states'

const populationURL = 'https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/'

const getStatePopulation = async uf => {  
  const locality = await getIdByInitials(uf)
  const result = await axios.get(`${populationURL}${locality}`)
  
  return {
    uf: locality != 0 ? uf : 'BR',
    populacao: result.data.projecao.populacao
  }
}

const getPopulationByLocality = async locality => {
  const result = await axios.get(`${populationURL}${locality}`)
  return result.data.projecao.populacao
}

export default {
  getStatePopulation,
  getPopulationByLocality
}
