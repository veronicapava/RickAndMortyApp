import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./action"

const addToFavorites = character => ({
    type: ADD_TO_FAVORITES,
    character
})

const deleteFromFavorites = character => ({
    type: DELETE_FROM_FAVORITES,
    character
})

export { addToFavorites, deleteFromFavorites }