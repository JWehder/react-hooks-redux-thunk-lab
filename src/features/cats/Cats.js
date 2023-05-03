import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const dispatch = useDispatch();
  const catPics = useSelector((state) => state.entities)
  
  useEffect(() => {
    dispatch(fetchCats());
  }, [])

  return (
    <div>
      <h1>CatBook</h1>
      {catPics.length > 0 ? <CatList catPics= {catPics} /> : <div>Loading...</div>}
    </div>
  );
}

export default Cats;
