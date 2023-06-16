export const Categories = ({myCategories,filterItems}) =>
{
    console.log(myCategories);
    return (
       <div className="btn-container">
         {
            myCategories.map((category)=>
            {
                return (
                    <button type="button" className="btn" key={category} onClick={()=>{filterItems(category)}}>
                        {category}
                    </button>
                )
            })
         }
       </div>
    );
}