import {StateType} from "../../store/stateType";

export const getUsersPageSelector = (state: StateType) => state.usersPage.items;

export const getPageSizeSelector = (state: StateType) => state.usersPage.pageSize;

export const getTotalUsersCountSelector = (state: StateType) => state.usersPage.totalCount;

export const getCurrentPageSelector = (state: StateType) => state.usersPage.currentPage;

export const getIsFetchingSelector = (state: StateType) => state.usersPage.isFetching;

export const getIsFinishedSelector = (state: StateType) => state.usersPage.isFinished;
