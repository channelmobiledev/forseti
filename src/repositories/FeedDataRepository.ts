import {SERVER_ADDRESS} from '../constants/CONFIG';

class FeedDataRespository {
  fetchData = () => {
    const address = SERVER_ADDRESS + 'feed/';
    const options = {
      method: 'GET',
    };
    return fetch(address, options);
  };
}

export default FeedDataRespository;
