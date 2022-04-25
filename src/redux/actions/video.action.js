import videoRequest from "../../api";
import {
  GET_POPULAR_VIDEOS_FAIL,
  GET_POPULAR_VIDEOS_START,
  GET_POPULAR_VIDEOS_SUCCESS,
  GET_RELATED_VIDEOS_FAIL,
  GET_RELATED_VIDEOS_START,
  GET_RELATED_VIDEOS_SUCCESS,
  GET_SEARCHED_VIDEOS_FAIL,
  GET_SEARCHED_VIDEOS_START,
  GET_SEARCHED_VIDEOS_SUCCESS,
  GET_VIDEO_BY_ID_FAIL,
  GET_VIDEO_BY_ID_START,
  GET_VIDEO_BY_ID_SUCCESS,
} from "../actionTypes";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_POPULAR_VIDEOS_START,
    });
    const { data } = await videoRequest("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 20,
        pageToken: getState().popularVideo.nextPageToken,
      },
    });
    dispatch({
      type: GET_POPULAR_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_POPULAR_VIDEOS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getVideoByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_POPULAR_VIDEOS_START,
    });
    const { data } = await videoRequest("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().popularVideo.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    dispatch({
      type: GET_POPULAR_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_POPULAR_VIDEOS_FAIL,
      payload: error.response.data,
    });
  }
};
export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VIDEO_BY_ID_START,
    });
    const { data } = await videoRequest("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    dispatch({
      type: GET_VIDEO_BY_ID_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: GET_VIDEO_BY_ID_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATED_VIDEOS_START,
    });
    const { data } = await videoRequest("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 15,
        type: "video",
      },
    });
    dispatch({
      type: GET_RELATED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: GET_RELATED_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getSearchedVideo = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SEARCHED_VIDEOS_START,
    });
    const { data } = await videoRequest("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video,channel",
      },
    });
    dispatch({
      type: GET_SEARCHED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: GET_SEARCHED_VIDEOS_FAIL,
      payload: error.response.data,
    });
  }
};
