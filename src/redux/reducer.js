import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_COUPON,
} from "./actions";

const initialState = {
  cart: [],
  wishlist: [],
  discount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case ADD_TO_WISHLIST: {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (exists) return state;

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload
        ),
      };

    case APPLY_COUPON:
      return {
        ...state,
        discount:
          action.payload === "SAVE10"
            ? 10
            : action.payload === "SAVE20"
            ? 20
            : 0,
      };

    default:
      return state;
  }
};

export default reducer;