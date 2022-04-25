import { GET_CHANNEL_BY_ID_FAIL, GET_CHANNEL_BY_ID_START, GET_CHANNEL_BY_ID_SUCCESS } from "../actionTypes";

export const channelById=(state={
    loading:true,
    channel:{}
},action)=>{
    const {type,payload}=action;
    switch (type){
        case GET_CHANNEL_BY_ID_START:return{
            ...state,
            loading:true,
        }
        case GET_CHANNEL_BY_ID_SUCCESS:return{
            ...state,
            loading:false,
           channel:payload,
        }
        case GET_CHANNEL_BY_ID_FAIL:return{
            ...state,
            loading:false,
            channel:null,
            error:payload,
        }
        default:return state;
    }
}