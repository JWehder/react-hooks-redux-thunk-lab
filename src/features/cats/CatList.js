import React from "react";

function CatList(catPics) {
    const displayCatPics = catPics.catPics.map((pic) => {
        return <img src={pic.url} alt="cat" key={pic.id} />
    })

    return (
        <div>
            {displayCatPics}
        </div>
    )
}

export default CatList;