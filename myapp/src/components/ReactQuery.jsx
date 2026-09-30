import { useQuery } from '@tanstack/react-query'

export default function ReactQuery(url) {
  const { isPending, error, data } = useQuery({
    queryKey: ['key'],
    queryFn: () =>
      fetch(url)
        .then((res => res.json())
    )
  })

  if (isPending) {
    return (
    <h3>Loading...</h3>
    )
  }

  if (error){
    return (
    <h3>{`Error... ${error}`}</h3>
    )
  } 

  return ({isPending, error, data})
}