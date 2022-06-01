import { CHANGE_NAV_COLOR } from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === CHANGE_NAV_COLOR) {
    return {
      ...state,
      navColor: action.payload.navColor,
    };
  }
};

export default reducer;
