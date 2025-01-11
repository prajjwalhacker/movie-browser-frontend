import axios from 'axios';

export const api = async () => {
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
        params: {
          title: 'prem',
          series_granularity: 'show',
          country: 'IN',
          show_type: 'movie',
          rating_max: '10',
          rating_min: '7',
          output_language: 'en'
        },
        headers: {
          'x-rapidapi-key': 'fb53e31502msh9c852389f454154p11ed18jsn25116568bd8e',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
