import { useState } from "react";
import data from './data';

const App = () => {

  const [count,setCount]=useState(1);
  const [text,setText]=useState([]);

  const handleChange = (e) =>
  {
     setCount(e.target.value);
  }

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0,amount));
  }

  return (
    <section className="section-center">
      <h4>Random Text Generator</h4>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Number of paragraphs : </label>
        <input type="number" onChange={handleChange} value={count} name="amount" id="amount" min='1' max='8' step='1' />
        <button className="btn" type="submit">Generate {count} {count==1?'Paragraph':'Paragraphs'}</button>
      </form>

      <article className="lorem-text">
        {
           text.map((para,index)=>
           {
              return <p key={index}>{para}</p>  
           })
        }
      </article>

    </section>
  );
};
export default App;
