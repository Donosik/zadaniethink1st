import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetchHolidays(year: number)
{
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetch(year:string)
    {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(`https://api.api-ninjas.com/v1/holidays?country=PL`, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "key",
                },
            });

            setData(response.data);
        } catch (err) {
            console.log(err);
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>
    {
        fetch(year.toString())
    }, [year])

    return { data, loading, error }
}
