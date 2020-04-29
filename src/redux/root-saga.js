import { all } from 'redux-saga/effects';

// Sagas
import shopSagas from './shop/shop.sagas';
import userSagas from './user/user.sagas';

export default function* rooSaga() {
    yield all([
        shopSagas(),
        userSagas()
    ])
}