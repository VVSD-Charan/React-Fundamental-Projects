import { useState } from "react";

export const Form = ({addColor}) =>
{
    const [color,setColor]=useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        addColor(color);
    };

    const handleChange = (e) =>
    {
        e.preventDefault();
        setColor(e.target.value);
        console.log(color);
    };

    return (
        <section className="container">
            <h4>Color Generator</h4>

            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={handleChange} />
                <input type="text" value={color} onChange={handleChange} placeholder="#f15025"/>
                <button className="btn" type="submit" style={{background: color}}>Submit</button>
            </form>

        </section>
    );
};