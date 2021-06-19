import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const data = {
  'PORTFOLIO 1': {
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 2': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 3': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 4': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 5': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 6': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 7': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 8': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 9': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
  'PORTFOLIO 10': {
    '1 YEAR': 8,
    '3 YEAR': 10,
    '5 YEAR': 12,
  },
};

const getData = props => {
  var mock = new MockAdapter(axios);
  mock.onGet('/api').reply(200, { data });

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `/api`,
    })
      .then(function (response) {
        // console.log(response.data);
        resolve(response.data);
      })
      .catch(e => {
        console.error(e);
        resolve({});
      });
  });
};
export { getData as data };
