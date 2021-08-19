import * as actionTypes from "../favourites/favourites-types";

export const addToFavourites = (itemID) => {
  return {
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromFavourites = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVOURITES,
    payload: {
      id: itemID,
    },
  };
};