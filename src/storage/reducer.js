import { LOGIN, SIGNOUT, UPDATECATEGORIES,} from "./constants";

initialState = {
    isLoggedIn: false,
    userId: "",
    email: "",
    categories: {},
}

export const HubReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.playload.userId,
                email: action.playload.email,
            };
            case SIGNOUT:
                return {
                    ...state,
                    isLoggedIn: false,
                    userId: "",
                    email: "",
                    mobileNumber: "",
                }
            case UPDATECATEGORIES:
                return {
                    ...state,
                    categories: action.playload.categories,
                }
        default:
            return state;
    }
}