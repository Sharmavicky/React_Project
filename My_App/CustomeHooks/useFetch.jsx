import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);       // Store fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null);     // Error state

    // Function to fetch data
    const fetchData = useCallback(async () => {
        setLoading(true);   // start loading
        setError(null);     // reset error
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);  // store data
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false); // finish loading
        }
        }, [url]);

        useEffect(() => {
            fetchData();
        }, [fetchData]
    );

    return { data, loading, error };
};
