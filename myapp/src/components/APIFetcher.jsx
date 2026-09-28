import { useState, useEffect } from 'react'

export default function APIFetcher(url){
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function FetchTheFetcher(){
            setLoading(true)
            
            try{
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            }

            catch(error) {
                setError(error)
            }

            finally {
                setLoading(false)
                setError(false)
            }
        }

        FetchTheFetcher()
    }, 
    
    [url])

    return(
        {data, loading, error}
    )
}