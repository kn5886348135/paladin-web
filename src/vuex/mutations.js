export const SET_USER_LOGIN_INFO = (state) => {
  state.userInfo.profilePhoto = sessionStorage.getItem('profilePhoto')
  state.userInfo.sessionId = sessionStorage.getItem('sessionId')
  state.userInfo.userName = sessionStorage.getItem('userName')
}
