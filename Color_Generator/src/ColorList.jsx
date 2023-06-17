import { SingleColor } from "./SingleColor";
import { nanoid } from 'nanoid';

export const ColorList = ({colors}) =>
{
    return (
        <section className="colors">
            {
                colors.map((color,index)=>{
                    return <SingleColor key={nanoid()} index={index} color={color}/>
                })
            }
        </section>
    );
};