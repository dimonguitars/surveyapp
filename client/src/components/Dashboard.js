import React from "react";
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const DashBoard = () => {
  return (
    <div>
      <p>To get started click on + button and create you first survey!</p>
      <SurveyList />
      <div className="fixed-action-btn" />
      <Link to='/surveys/new' className="btn-floating btn-large red">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default DashBoard;
