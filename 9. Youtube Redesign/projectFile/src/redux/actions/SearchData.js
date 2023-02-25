import axios from 'axios';

const searchAction = (keyword) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: keyword,
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date',
      },
      headers: {
        'X-RapidAPI-Key': '76de2c60bdmshdd06837edf582a4p1ba1d2jsn34c8f57a1842',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        dispatch({ type: 'GET_SEARCH', payload: response.data });
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export default searchAction;
