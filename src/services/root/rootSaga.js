import homeSaga from '../home/saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(homeSaga),
  ])
}
