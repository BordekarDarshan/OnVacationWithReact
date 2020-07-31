import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserDataAfterSignIn,
} from "../../Firebase/Firebase";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./Action";
import { currentUser } from "../../Firebase/Firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(
    createUserDataAfterSignIn,
    userAuth,
    additionalData
  );
  const userSnapshot = yield userRef.get();
  yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest("Google_Sign_In_Start", signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest("Email_Sign_In_Start", emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield currentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest("Check_User_Session", isUserAuthenticated);
}
export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* onsignOut() {
  yield takeLatest("Sign_Out_Start", signOutUser);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest("Sign_Up_Start", signUp);
}

export function* signUpToSignIn({ payload: { user, additionalData } }) {
  yield call(getSnapshotFromUserAuth, user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest("Sign_Up_Success", signUpToSignIn);
}

// Take give action data{type and payload to its spwans saga}
function* emailSignInDupli(props) {
  console.log(props);
}

export function* onEmailSignInStartDupli() {
  yield takeLatest("Email_Sign_In_Start", emailSignInDupli);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onCheckUserSession),
    call(onsignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onEmailSignInStartDupli),
  ]);
}
