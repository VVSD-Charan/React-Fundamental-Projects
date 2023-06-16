import { Tour } from "./Tour";

export const Tours = ({myTours,removeTour}) =>{
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="title-underline"></div>
            </div>

            <div className="tours">
                {
                    myTours.map((tour)=>{
                        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    })
                }
            </div>
        </section>
    );
}