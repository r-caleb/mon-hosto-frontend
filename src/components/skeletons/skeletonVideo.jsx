import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonVideo = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme baseColor="#eeeeee" highlightColor="#f4f8fa">
        <Skeleton height={180} />
        <div>
          <Skeleton height={40} width="100%" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
