import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Corrected initialization

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Corrected function name

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setError('Failed to fetch');
                } else {
                    const result = await res.json();
                    setData(result.data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;




// import {useState, useEffect} from 'react';

// const useFetch = (url) => {
//     const [data, setData] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setloading] = useState([])

//     useEffect(()=>{

//         const fetchData = async()=>{
//             setloading(true)

//             try {
//                 const res = await fetch(url);

//                 if(!res.ok){
//                     setError('failed to fetch')
//                 }
//                 const result = await res.json();
//                 setData(result.data)
//                 setloading(false);
//             } catch (err) {
//                 setError(err.message)
//                 setloading(false);
//             }
//         };

//         fetchData();

//     }, [url])
 
//     return {
//         data,
//         error,
//         loading,
//     }
// }

// export default useFetch;