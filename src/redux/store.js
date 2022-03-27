import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './action'
import { createStore } from 'redux'

const inicialStore = {
    favoritesCharacter: []
}

const rootReducer = (state = inicialStore, { type, character }) => {

    if (type == ADD_TO_FAVORITES) {

        let newFavo = [...state.favoritesCharacter, character]

        return {
            ...state,
            favoritesCharacter: newFavo
        }

    }

    if (type == DELETE_FROM_FAVORITES) {
        let newFavo = state.favoritesCharacter.filter(char => char.id != character.id)
        return {
            ...state,
            favoritesCharacter: newFavo
        }

    }

    return state

}

export default createStore(rootReducer)