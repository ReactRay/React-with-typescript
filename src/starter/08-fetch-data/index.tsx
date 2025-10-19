

import { useState, useEffect } from 'react';
const url = 'https://www.course-api.com/react-tours-project';

function Component() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('faailer to fetch tours....')
        }
        const rawData = await res.json();
        setTours(rawData);

      } catch (error) {
        const message = error instanceof Error ? error.message : 'there was an error...';
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])


  if (isLoading) {
    return <h3>loading ...</h3>
  }

  if (isError) {
    return <h3> error...{isError}</h3>
  }

  return (
    <div>
      <h2>React & Typescript</h2>
      {tours.map((tour) => {
        return <h2>{tour.name}</h2>
      })}
    </div>
  );
}
export default Component;
