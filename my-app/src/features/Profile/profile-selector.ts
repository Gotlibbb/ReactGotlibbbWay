import {StateType} from "../../store/stateType";

export const getProfileSelector = (state: StateType) => state.profilePage.profile;

export const getProfileStatusSelector = (state: StateType) => state.profilePage.profileStatus;

export const getAuthIdSelector = (state: StateType) => state.data.id;
