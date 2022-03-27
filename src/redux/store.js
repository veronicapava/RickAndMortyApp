import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './action'
import { createStore } from 'redux'

const inicialStore = {
    favoritesCharacter: []
}

const rootReducer = (state = inicialStore, { type, character }) => {

    if (type == ADD_TO_FAVORITES) {
        if (state.favoritesCharacter.find(char => char.id === character.id)) return state
        state.favoritesCharacter.push(character)
        return state

    }

    if (type == DELETE_FROM_FAVORITES) {
        state.favoritesCharacter = state.favoritesCharacter.filter(char => char.id != character.id)
        return state
    }

    return state

}

export default createStore(rootReducer)