const initialState = {
  likedProducts: [],
  lang: localStorage.getItem("lang")
}

const likeReducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type){
    case "LIKE_PRODUCT":
      return {
        likedProducts: [...state.likedProducts, action.product]
      }

    case "DISLIKE_PRODUCT":
      const id = action.id;
      const indexOfDislikedProduct = state.likedProducts.findIndex(product => product?._id === id);
      if(indexOfDislikedProduct >= 0){
        state.likedProducts.splice(indexOfDislikedProduct, 1);
      }
      return {
        likedProducts: state.likedProducts
      }
    case "CHANGE_LANG":
      return {
        lang: action.langCode,
        likedProducts: state.likedProducts
      }
    default:
      return state
  }
}
export default likeReducer