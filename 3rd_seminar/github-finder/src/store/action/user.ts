import {createAsyncAction,createReducer} from 'typesafe-actions';
import {AxiosError} from 'axios';
import { getUser, IUserData } from '../../lib/api/user';
// saga modules
import {call,put,takeEvery} from 'redux-saga/effects';


// actions
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_ERROR = 'FETCH_USER_PROFILE_ERROR';

// action creators by createAsyncAction - 비동기 액션에 대한 action create
export const getUserProfile = createAsyncAction(
    FETCH_USER_PROFILE,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_ERROR
)<string, IUserData,AxiosError>();

function* getUserDataSaga(action: ReturnType<typeof getUserProfile.request>){
    try{
        const userData = yield call(getUser,action.payload); // payload에 username 들어가야 함
        yield put(getUserProfile.success(userData));
    }catch(e){
        yield put(getUserProfile.failure(e));
    }
}

interface IState {
    userData:{
        loading: boolean,
        error: Error | null,
        data: IUserData | null
    }
}

const initialState = {
    userData: {
        loading: false,
        error: null,
        data: null
    }
}

// typesafe-actions의 createReducer<stateType, actionType>
const userReducer = createReducer<IState,any>(initialState,{
    [FETCH_USER_PROFILE]: state =>({
        ...state,
        userData: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [FETCH_USER_PROFILE_SUCCESS]: (state,action) => ({
        ...state,
        userData:{
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [FETCH_USER_PROFILE_ERROR]: (state,action) =>({
        ...state,
        userData:{
            loading: false,
            error: action.payload,
            data: null
        }
    }) 
});

export function* userSaga(){
    yield takeEvery(FETCH_USER_PROFILE,getUserDataSaga);
}

export default userReducer;