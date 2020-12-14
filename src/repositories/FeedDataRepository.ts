class FeedDataRespository {
  fetchData = () => {
    const options = {
      method: 'GET',
    };
    return fetch('http://192.168.0.13:8000/feed/', options);
  };
}

export default FeedDataRespository;
