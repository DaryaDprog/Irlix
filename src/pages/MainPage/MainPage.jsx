import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import './MainPage.scss';
import {getAllItems} from "../../action/coctails"
import Coctail from "../../components/Coctail/Coctail"



function MainPage() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.coctails.coctails)
    const [searchQuery, setSearchQuery] = useState('')
    const searchedItems = useMemo(()=>{
        return items.filter(item => item.name.toLowerCase().includes(searchQuery))
    },[searchQuery])

    useEffect(()=> {
        dispatch(getAllItems())
    },[])

    function getItems () {
        if(searchQuery) {
            return searchedItems
        }
        return items
    }

  return (
    <div className="main">
        <input type="text" 
                placeholder="Поиск..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="search"
        />
        {getItems().map(item =>
            <Coctail item={item} key={item.id}/>
        )}
    </div>
  );
}

export default MainPage;