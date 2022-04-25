import videoRequest from "../../api"
import { GET_COMMENTS_FAIL, GET_COMMENTS_START, GET_COMMENTS_SUCCESS } from "../actionTypes"

export const getComments=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:GET_COMMENTS_START
        })
        const {data} = await videoRequest("/commentThreads",{
            params:{
                part:'snippet',
                videoId:id,
            }
        })
        dispatch({
            type:GET_COMMENTS_SUCCESS,
            payload:data.items,
        })
        
    } catch (error) {
        dispatch({
            type:GET_COMMENTS_FAIL,
            payload: error.response.data.message,
        })
    }
}