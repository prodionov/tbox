const ADD_PHOTO = "ADD_PHOTO";

export const addPhoto = photo => ({
  type: ADD_PHOTO,
  photo
});

let initialState = [];

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_PHOTO:
      return [
        ...state,
        {
          photo: action.photo
        }
      ];
    default:
      return state;
  }
}
