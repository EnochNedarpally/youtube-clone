import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {authReducer} from './reducer/auth.reducer'
import { channelById } from './reducer/channel.reducer'
import { getVideoComments } from './reducer/comments.reducer'
import { getRelatedVideoReducer, getSearchedVideoReducer, popularVideoReducer, selectedVideoReducer } from './reducer/video.reducer'


const rootReducer= combineReducers({
    auth:authReducer,
    popularVideo:popularVideoReducer,
    selectedVideo:selectedVideoReducer,
    selectedChannel:channelById,
    videoComment:getVideoComments,
    relatedVideos:getRelatedVideoReducer,
    searchedVideos:getSearchedVideoReducer,
})


const store = createStore(
    rootReducer,
    {},
    composeWithDevTools (applyMiddleware(thunk))
)

export default store