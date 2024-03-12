import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/5ALXI1aPLIJqBo30bFhCdjgn12Nh2LyU',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;
