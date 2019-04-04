import axios from 'axios'

const stateURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

export const getIdByInitials = async initials => {
  const states = await getAllStates()
  
  for (let state of states.data) {
    if (state.sigla == initials) {
      return state.id
    }
  }

  return 0
}

export const getAllStates = () => axios.get(stateURL)
