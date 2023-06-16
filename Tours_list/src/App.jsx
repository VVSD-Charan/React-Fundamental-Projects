import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [isLoading,setIsLoading]=useState(true);
  const [tours,setTours]=useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    setIsLoading(true);

    try
    {
       const response =await fetch(url);
       const tours = await response.json();
       setTours(tours);

       console.log(tours);
    }
    catch(error)
    {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(()=>{
     setTimeout(() => {
      fetchTours();
     }, 3000);
  },[]);

  if(isLoading)
  {
    return (
      <main>
        <Loading/>
      </main>
    );
  }

  if(tours.length==0)
  {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left!</h2>
          <button type="button" style={{marginTop:'2rem'}} className="btn" onClick={fetchTours}>Refetch Tours</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours myTours={tours} removeTour={removeTour}/>
    </main>
  )
};

export default App;
