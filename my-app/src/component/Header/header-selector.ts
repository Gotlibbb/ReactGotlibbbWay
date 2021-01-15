import {AuthType} from "../../Redux/store";

export const getAuthSelector = (state: AuthType) => state.data.isAuth;

export const getLoginSelector = (state: AuthType) => state.data.login;
