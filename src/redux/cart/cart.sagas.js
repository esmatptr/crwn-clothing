import { takeLatest, put, call, all } from 'redux-saga/effects';

import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';

// Actions
import { clearCart } from './cart.actions'

function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}


export default function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
    ])
}