import React, {useEffect} from 'react';
import './CoctailInfo.scss';
import {getItem} from "../../action/coctails";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router';
import back from "../../assetes/img/back.svg";


const CoctailInfo = function () {
    const params = useParams();
    const item = useSelector(state => state.coctail.coctail)
    const history = useHistory()
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(getItem(params.id));
    },[])

    
    return (
        <div className="coctailInfo">
            <button className="coctailInfo__back" type="button" onClick={()=>history.goBack()}>
                <img src={back} alt="back" className="coctailInfo__icon" />
            </button>
            <h2 className="coctailInfo__name">{item.name}</h2>
            <p className="coctailInfo__text">Fresh drink</p>
            <h3 className="coctailInfo__cook">Как готовить</h3>
            <p className="coctailInfo__instruction">{item.description}</p>
        </div>
    )
}

export default CoctailInfo;