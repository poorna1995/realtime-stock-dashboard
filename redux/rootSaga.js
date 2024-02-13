import { all, call } from "redux-saga/effects";

export default function* rootSaga() {
	// yield all([call(userSagas)]);
	yield all([
		// call(userSagas),
	]);
}
