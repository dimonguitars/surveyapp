import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurveys } from '../../actions';


class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys()
  }

removeSurvey(){
  let surveyId = this.props.surveys[0]._id
  this.props.deleteSurveys(surveyId)
}

  renderSurveys(){
    return this.props.surveys.reverse().map(survey =>{
      return (
        <div className='card darken-1' key={survey._id}>
         <div className='card-content'>
           <span className='card-title'>
             <h4>{survey.title}</h4>
           </span>
           <p>
             {survey.body}
           </p>
           <p className='right'>
             Sent On: {new Date(survey.dateSent).toLocaleDateString()}
           </p>
         </div>
         <div>
           <div className='card-action'>
             <a>Yes: {survey.yes}</a>
             <a>No: {survey.no}</a>
             <div className='btn right' onClick={() => this.removeSurvey()}>Delete Servey</div>
           </div>
         </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
       {this.renderSurveys()}
      </div>
    );
  }
}

function MapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(MapStateToProps, { fetchSurveys, deleteSurveys })(SurveyList);
