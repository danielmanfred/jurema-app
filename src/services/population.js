import axios from 'axios'
import { getIdByInitials } from './states'

const populationURL = 'https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/'

/**
 * Constroi a resposta para a solicitação da população de uma estado por meio de sua sigla
 * 
 * @param {string} uf 
 */
const getStatePopulation = async uf => {  
  const locality = await getIdByInitials(uf)
  const result = await axios.get(`${populationURL}${locality}`)
  
  return {
    uf: locality != 0 ? uf : 'BR',
    populacao: result.data.projecao.populacao
  }
}

/**
 * Retorna a população por meio da localidade
 * 
 * @param {number} locality Número de localização do estado
 */
const getPopulationByLocality = async locality => {
  const result = await axios.get(`${populationURL}${locality}`)
  return result.data.projecao.populacao
}

export default {
  getStatePopulation,
  getPopulationByLocality
}
