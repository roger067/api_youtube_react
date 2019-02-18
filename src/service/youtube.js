import axios from 'axios';

const KEY = 'AIzaSyDCNeySMf4pJlWVuwR9HmbfmYD6ZkYhSXY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});