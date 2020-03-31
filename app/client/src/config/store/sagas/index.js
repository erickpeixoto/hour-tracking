import { all, fork } from 'redux-saga/effects';

import main from '../../../components/main/store/sagas'

export default function* root() {
  yield all([
    fork(main)
  ])
}
