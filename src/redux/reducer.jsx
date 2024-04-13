const initalStore = {
  products: [],
};

export const Reducer = (state = initalStore, action) => {
  switch (action.type) {
    case "ADD_TO_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "ADD_DELETE":
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
