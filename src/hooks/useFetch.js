import {useState} from 'react'

const useFetch = () => {
  const [response, setResponse]=useState(null)
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(null)

  const fetchData=async(url, options)=>{
    setLoading(true)
    try {
      const response = await fetch(url, options)
      const data = await response.json();
      setResponse(data)
    } catch (error) {
      setError(error.message)     
    }
    finally{
      setLoading(false)
    }
  }

  return {response, error, loading, fetchData}
  
}

export default useFetch
