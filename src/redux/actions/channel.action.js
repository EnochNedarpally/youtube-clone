import videoRequest from "../../api"
import { GET_CHANNEL_BY_ID_FAIL, GET_CHANNEL_BY_ID_START, GET_CHANNEL_BY_ID_SUCCESS } from "../actionTypes"

export const getChannelById=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:GET_CHANNEL_BY_ID_START
        })
        const {data} = await videoRequest("/channels",{
            params:{
                part:'snippet,statistics',
                id,
            }
        })
        dispatch({
            type:GET_CHANNEL_BY_ID_SUCCESS,
            payload:data.items[0],
        })
        
    } catch (error) {
        dispatch({
            type:GET_CHANNEL_BY_ID_FAIL,
            payload: error.message,
        })
    }
}