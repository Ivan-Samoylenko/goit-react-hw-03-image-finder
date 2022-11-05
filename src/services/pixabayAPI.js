import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get('', {
    params: {
      key: '29632331-970c63df483138173fd88b904',
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      q: query,
      page: page,
    },
  });

  return response.data;
};
