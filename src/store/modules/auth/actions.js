export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signSuccess(data) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { ...data },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
