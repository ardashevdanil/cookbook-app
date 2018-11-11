import axios from 'axios';

const pushUserImage = payload => () => {
  const data = new FormData();

  data.append('img', payload);
  console.log(payload);

  return axios.post('/images/users', data)
    .catch(
      err => console.error(err),
    );
};

export default pushUserImage;
