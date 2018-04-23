import axios from 'axios'
import React from 'react'
import Spinner from './Spinner'

const divStyle = {
  marginLeft: '200px',
    marginRight: '200px',
     marginTop: '20px',
  border: '5px solid blue'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const buttonStyle = {
  fontSize: '15px',
  textAlign: 'center'
};


export default class BooksPage extends React.Component {




 constructor() {
    super();

    this.state = {
      jobs: []
    };
}

  componentDidMount() {
   var _this = this;
    this.serverRequest = 
      axios
        .get("http://localhost:3001/blocks")
        .then(function(result) {  
			console.log(result.data)
          _this.setState({
            jobs: result.data
            
          });
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <h1>Books!</h1>
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.index} style={divStyle} className="card">
            
            <p>Block ID : {job.index}</p>
            <br></br>
            <p>Previous Hash : {job.previousHash}</p>
           <br></br>
            <p>Hash : { job.hash } </p>
           <br></br>
              <a href={job.data}>
               <button style={buttonStyle} >View Book</button>
               
              </a>
            </div>
          );
        })}
      </div>
    )
  
  }

}
