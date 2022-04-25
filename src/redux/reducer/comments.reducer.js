import { GET_COMMENTS_FAIL, GET_COMMENTS_START, GET_COMMENTS_SUCCESS } from "../actionTypes";

export const getVideoComments=(state={
    loading:true,
    comments:null
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_COMMENTS_START:return{
            ...state,
            loading:true,
        }
        case GET_COMMENTS_SUCCESS:return{
            ...state,
            loading:false,
           comments:payload,
        }
        case GET_COMMENTS_FAIL:return{
            ...state,
            loading:false,
            comments:null,
            error:payload,
        }
        default:return state;
    }
}