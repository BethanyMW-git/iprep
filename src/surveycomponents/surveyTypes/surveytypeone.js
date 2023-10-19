import React from "react";
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import {surveyJson} from '../surveys/surveyjson';
import "survey-core/defaultV2.min.css";

const iPrepSurvey = (prop) => {
    return(
    <Survey.Survey
    showCompletedPage= {false}
    onComplete={data => prop.showCompletedPage(data.valuesHash)} 
    json={surveyJson}
    />
    )
}

export default iPrepSurvey;