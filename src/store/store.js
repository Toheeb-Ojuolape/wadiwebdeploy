import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import eventReducer from "./eventReducer"
import forumReducer from './forumReducer'
import projectReducer from './projectReducer'
import reviewerProjectReducer from './projectByReviewer'
import equipmentReducer from './equipmentReducer'

export const store = configureStore({
  reducer: {
    user:userReducer,
    event:eventReducer,
    forum:forumReducer,
    project:projectReducer,
    reviewerProjects:reviewerProjectReducer,
    equipments:equipmentReducer
  
  }
 
})

// export type RootState = ReturnType<typeof store.getState>
