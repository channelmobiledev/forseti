class FeedDataRespository {
  fetchData = () => {
    return fetch('https://reactnative.dev/movies.json');
  };
}

export default FeedDataRespository;
