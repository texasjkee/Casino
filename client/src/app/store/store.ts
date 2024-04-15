import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import postApi from '../../entities/posts/api/postApi'
// import userApi from '../../entities/user/api/userApi'
// import mainApi from './mainApi'
import { _userApi } from '../../entities/_user/_user'
import { _postApi } from '../../entities/_posts/api/_postsApi'

// export const store = configureStore({
//   reducer: {
//     [postApi.reducerPath]: postApi.reducer,
//     [userApi.reducerPath]: userApi.reducer
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat([mainApi.middleware])
// })
export const store = configureStore({
  reducer: {
    [_userApi.reducerPath]: _userApi.reducer,
    [_postApi.reducerPath]: _postApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([_userApi.middleware, _postApi.middleware])
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
