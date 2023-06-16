import { MenuItem } from "./MenuItem";

export const Menu = ({items}) =>
{
    return (
        <div className="section-center">
            {
                items.map((item)=>{
                    return <MenuItem key={item.id} {...item}/>
                })
            }
        </div>
    );
}