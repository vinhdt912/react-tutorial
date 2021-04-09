import { all, call, fork, put, take, takeEvery } from "redux-saga/effects";
import { apis } from "../../constants";
import { types } from "../../constants/auth";
import { postServiceAction } from "../../services/api-service";
import { loginActionFailed, loginActionSuccess } from "../actions/auth";

function* watchLoginAction() {
  while (true) {
    try {
      const action = yield take(types.LOGIN_ACTION);
      const response = yield call(postServiceAction, apis.API_LOGIN, action.payload);
      console.log(response);
      yield put(loginActionSuccess(response));
    } catch (error) {
      yield put(loginActionFailed(error));
    }
  }
}

function* loginSagaAction() {
  // yield takeEvery(types.LOGIN_ACTION, watchLoginAction);
  yield* watchLoginAction();
}

export default function* rootSaga() {
  yield all([loginSagaAction()]);
}
