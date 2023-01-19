import React, { Component} from "react";
import './App.css';

class App extends Component{
  state = {
    Name1 : "",
    Department : "",
    Rating : "",
    person : []
  };
   changecontent =(e) =>{
    // console.log("abcd")
    this.setState({[e.target.name] : e.target.value});
  }

  submitcontent = (e) => {
    const personObj = {
Name : this.state.Name1,
Department : this.state.Department,
Rating : this.state.Rating
    }
    const arr = this.state.person;
    arr.push(personObj);
    this.setState({person : arr})
  }
  render() {
    return (
      <div >
       <div className="pos">
       <h1 className="header">EMPLOYEE FEEDBACK FORM</h1>
       <form >
        <label className="text" htmlFor="Name">Name : </label>
        <input type="text" name="Name1" className="box" value={this.state.Name} onChange={this.changecontent} ></input>
        <br/>
        <br/>
        <label className="text">Department : </label>
        <input type="text" name="Department" className="box" value={this.state.Department}  onChange={this.changecontent} ></input>
        <br/>
        <br/>
        <label className="text">Rating : </label>
        <input type="Number" name="Rating" className="box" value={this.state.Rating}  onChange={this.changecontent} ></input>
        <br/>
        <br/>
        <button className="text" type="button" onClick={this.submitcontent}>Submit</button>
       </form>
       </div>
<br/>
<br/>
<br/>
       <div className="containersubmit">
        {this.state.person.map((value, index) => {
          return(
           
              <div key={index} className="contentsubmit">Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</div>
            
          )
        })}
       </div>
      </div>
    ); 
  }
}

export default App;
