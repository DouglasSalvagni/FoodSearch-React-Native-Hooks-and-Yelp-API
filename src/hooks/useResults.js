import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };

    //Call searchApi when component is first rendered. BAD CODE!
    //searchApi('pasta');
    //The function will be called multiple time

    //In this case the function will be called just once
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
};