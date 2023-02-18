// import { useDispatch, useSelector } from "react-redux";
// import { loading, stopLoading } from "../reducers/IsLoadingSlice";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

function Loading() {
  // const isLoading = useSelector(loading);
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // setTimeout(() => {
  //   dispatch(stopLoading(false));
  // }, 1000);

  return (
    loading && (
      <div className="page-loading">
        <h1>
          <FaSpinner />
        </h1>
      </div>
    )
  );
}

export default Loading;
