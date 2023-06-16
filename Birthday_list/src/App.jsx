import { useState } from "react";
import { data } from "./data";

const App = () => {
  const [people,setPeople]=useState(data);

  return (
     <main>
        <section className="container">
          <h3>{people.length} birthdays today!</h3>
      {
         people.map((person)=>{
            return (
              <article key={person.id} className="person">
                 <img className="img" src={person.image} alt={person.name} />
                 <div>
                   <h4>{person.name}</h4>
                   <p>{person.age}</p>
                 </div>
              </article>
            );
         })
      }
      <button type="button" onClick={()=>{setPeople([])}}  className="btn btn-block">Remove all birthdays</button>
    </section>
     </main>
  );
};
export default App;
 