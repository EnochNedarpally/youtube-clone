import { GET_POPULAR_VIDEOS_FAIL, GET_POPULAR_VIDEOS_START, GET_POPULAR_VIDEOS_SUCCESS, GET_RELATED_VIDEOS_FAIL, GET_RELATED_VIDEOS_START, GET_RELATED_VIDEOS_SUCCESS, GET_SEARCHED_VIDEOS_FAIL, GET_SEARCHED_VIDEOS_START, GET_SEARCHED_VIDEOS_SUCCESS, GET_VIDEO_BY_ID_FAIL, GET_VIDEO_BY_ID_START, GET_VIDEO_BY_ID_SUCCESS } from "../actionTypes";

const initialState={
    popularVideos:[],
    nextPageToken:null,
    loading:false,
    activeCategory:'All'
}

export const popularVideoReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_POPULAR_VIDEOS_START:return{
            ...state,
            loading:true
        }
        case GET_POPULAR_VIDEOS_SUCCESS:return{
            ...state,
            loading:false,
            popularVideos:payload.category===state.activeCategory ? 
            [...state.popularVideos,...payload.videos]:payload.videos,
            nextPageToken:payload.nextPageToken,
            activeCategory: payload.category,
        }
        case GET_POPULAR_VIDEOS_FAIL:return{
            ...state,
            loading:false,
            error:payload
        }
        default:return state;
    }
}

export const selectedVideoReducer=(state={
    loading:true,
    video:null
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_VIDEO_BY_ID_START:return{
            ...state,
            loading:true,
        }
        case GET_VIDEO_BY_ID_SUCCESS:return{
            ...state,
            loading:false,
           video:payload,
        }
        case GET_VIDEO_BY_ID_FAIL:return{
            ...state,
            loading:false,
            video:null,
            error:payload,
        }
        default:return state;
    }
}

export const getRelatedVideoReducer=(state={
    loading:true,
    videos:null
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_RELATED_VIDEOS_START:return{
            ...state,
            loading:true,
        }
        case GET_RELATED_VIDEOS_SUCCESS:return{
            ...state,
            loading:false,
           videos:payload,
        }
        case GET_RELATED_VIDEOS_FAIL:return{
            ...state,
            loading:false,
            videos:null,
            error:payload,
        }
        default:return state;
    }
}

export const getSearchedVideoReducer=(state={
    loading:true,
    videos:null
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_SEARCHED_VIDEOS_START:return{
            ...state,
            loading:true,
        }
        case GET_SEARCHED_VIDEOS_SUCCESS:return{
            ...state,
            loading:false,
           videos:payload,
        }
        case GET_SEARCHED_VIDEOS_FAIL:return{
            ...state,
            loading:false,
            videos:null,
            error:payload,
        }
        default:return state;
    }
}