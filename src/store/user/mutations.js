import { LocalStorage } from "quasar";

function setLoggedIn(state, value) {
  state.loggedIn = value;

  LocalStorage.set("user.loggedIn", value);
}

function setDetails(state, payload) {
  state.details = payload;

  LocalStorage.set("user.details", payload);
}

function setIsAdmin(state, value) {
  state.isAdmin = value;

  LocalStorage.set("user.isAdmin", value);
}

export { setLoggedIn, setDetails, setIsAdmin};

