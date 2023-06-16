import { useEffect, useState } from "react";

export const Tour = ({id,image,info,name,price,removeTour}) =>{

   const [readMore,setReadMore]=useState(false);
   const [showInfo,setShowInfo]=useState(info.substring(0,200)+'...  ');
   const [read,setRead]=useState('Read more');

    const Toggle = () =>
    {
        setReadMore(!readMore);

        if(readMore)
        {
            setShowInfo(info+'  ');
            setRead('Read less');
        }
        else
        {
            setShowInfo(info.substring(0,200)+'....  ');
            setRead('Read More');
        }
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name}  className="img"/>
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {showInfo}
                    <button type="button" className="info-btn" onClick={Toggle}>{read}</button>
                </p>
                <button type="button" className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>Not interested</button>
            </div>
        </article>
    );
}