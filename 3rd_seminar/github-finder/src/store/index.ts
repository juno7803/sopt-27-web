import {combineReducers} from 'redux';
import userReducer,{userSaga} from '../store/action/user';
import {all} from "redux-saga/effects";

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;

// ReturnType으로 rootReducerd의 타입 추론
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga(){
    yield all([userSaga()]);
}