import { LOGIN, SIGNOUT, UPDATECATEGORIES,} from "./constants";

export const login = data => ({
    type: LOGIN,
    playload: {
        userId: data.userId,
        email: data.email,
    }
})

export const SignOut = data => ({
    type: SIGNOUT,
    playload: {}
})

export const UpdateCategories = data =>({
    type: UPDATECATEGORIES,
    playload: {
        categories: data.result,
    }
})