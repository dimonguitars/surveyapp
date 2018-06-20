import React from 'react';

const Landing = () => {
  const { text } = styles;
  return (
    <div style={{textAlign: 'center', flex: 1 }}>
      <h2 style={{ padding: 30}}>
        Collect  feedback from you users!
      </h2>
      <div className='card-panel grey lighten-4' style={{ borderWidth: 2}}>
        <div className="container">
          <div className="row">
              <div className=''>
                <div className=" col m8 ">
                  <div>
                    <div className='left' style={{ textAlign: 'left'}}>

                      <div  style={text}>
                          <h4>Get stated</h4>
                        <i class="material-icons">check</i>
                        <span>Create a survey compain</span>
                      </div>
                      <div  style={text}>
                        <i class="material-icons">check</i>
                          Send as many emails as you want!
                      </div>
                      <div  style={text}>
                        <i class="material-icons">check</i>
                         Recieve a feedback from your customers!
                      </div>
                      <p>To get started singup with Google </p>
                    </div>
                  </div>
                </div>
                <div className='col m4'>
                  <img src={require('../image/survey-image.jpg')}/>
                </div>
              </div>
            </div>
           </div>
      </div>
    </div>
  );
};

export default Landing;


const styles = {
  text: {
    fontSize: 20,
    padding: 10
  }
}
