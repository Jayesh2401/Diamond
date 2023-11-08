import React, { useEffect } from "react";
import useLoader from "./useLoader";

function Testloader() {
  const { loading, showLoader, hideLoader } = useLoader();

  const fetchSomeData = () => {};

  const fetchData = async () => {
    try {
      showLoader();
      await fetchSomeData();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        hideLoader();
      }, 3000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      sefesg
      {loading && <div>Loading...</div>}
      {/* Your component content here */}
    </div>
  );
}

export default Testloader;
