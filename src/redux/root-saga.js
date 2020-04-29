import { all } from 'redux-saga/effects';

// Sagas
import shopSagas from './shop/shop.sagas';

export default function* rooSaga() {
    yield all([
        shopSagas()
    ])
}