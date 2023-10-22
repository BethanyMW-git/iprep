import React, {useState, useCallback } from "react";
import Iprepsurvey from "../surveyTypes/surveytypeone";
import { Link } from "react-router-dom";


export const SurveyOne = () => {

    const [showPage, setShowPage] = useState(true);

        const onCompletePage = useCallback((data) => {
            console.log(data);
            setShowPage(!showPage);
        }, [showPage])

    const setFinalPage = () => {
        return (
            <div>
                <h1>Thank you for completing the iPrep survey</h1>
                <Link to="/checkout">
                <button>Click Here to move on to the cart!</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="App">
            {
            showPage?
            <Iprepsurvey showCompletedPage={data => onCompletePage(data.valuesHash)}/> :
            setFinalPage()
            }
        </div>
    )
}

// export default SurveyOne