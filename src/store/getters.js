const getters = {
  userInfo: state => state.user.userInfo,
  fold: state => state.app.fold,
  permissionRoutes: state => state.permission.routes
}

export default getters
