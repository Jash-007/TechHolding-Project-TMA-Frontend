import { redirect } from "react-router-dom";

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("user"));
}
function getToken() {
  return localStorage.getItem("Authorization");
}

function checkSession() {
  return getToken() ? true : false;
}

function isAdmin() {
  return JSON.parse(localStorage.getItem("user"))?.drole === "admin";
}

function isAuthorized() {
  if (!checkSession() || !isAdmin()) {
    return redirect(`/users/${getLoggedInUser()?.id}`);
  }
  return true;
}
export { getToken, checkSession, getLoggedInUser, isAdmin, isAuthorized };