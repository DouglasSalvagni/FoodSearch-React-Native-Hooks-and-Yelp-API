import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nN1sPs2O7oGQ2XNUTTisf4g6GSQlgDb6p9XQ36VQHG7CaSPjlRAr-o1fVQAfXDTjH9KR7AR3S7KBC0QoBKHm-o2xSY1z09g8p1t6peQwOi7tlUv6JUPfAfu-l2s5XnYx'
    }
});