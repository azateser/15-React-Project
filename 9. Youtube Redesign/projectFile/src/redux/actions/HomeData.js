import axios from 'axios';

const homeAction = (data) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        part: 'snippet',
        // type: 'video',
        q: data,
        maxResults: '50',
      },
      headers: {
        'X-RapidAPI-Key': '76de2c60bdmshdd06837edf582a4p1ba1d2jsn34c8f57a1842',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };

    await axios.request(options).then(function (response) {
        dispatch({type: 'GET_VIDEOS', payload: response.data})
      })
      .catch(function (error) {
        console.error(error);
      });

  } catch (error) {
    console.log(error);
  }
};

export default homeAction;
