import axios from 'axios'

const stateURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

/**
 * Recupera todos os estados direto do banco de dados do IBGE
 */
const getAllStates = () => axios.get(stateURL)

/**
 * Retorna o id do estados no banco de IBGE por meio da sua sigla
 * 
 * @param {*} initials 
 */
export const getIdByInitials = async initials => {
  const states = await getAllStates()
  
  for (let state of states.data) {
    if (state.sigla == initials) {
      return state.id
    }
  }

  return 0
}

export default {
  getAllStates
}
