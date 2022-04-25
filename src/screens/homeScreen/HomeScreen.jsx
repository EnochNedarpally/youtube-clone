import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Videos from "../../components/videos/Videos";
import { getPopularVideos } from "../../redux/actions/video.action";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { popularVideos } = useSelector((state) => state.popularVideo);
  useEffect(() => {
    dispatch(getPopularVideos());
  }, []);

  const fetchData = () => {
       dispatch(getPopularVideos())
 }

  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={popularVideos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="rowContainer row"
      >
        {popularVideos?.map((video) => (
          <Col key={video.id} lg={3} md={4}>
            <Videos video={video} />
          </Col>
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
