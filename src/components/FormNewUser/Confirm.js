import React, { Component } from 'react';

class Confirm extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }



  render() {
    const { values: { cpfCnpj, sobrenome, email, obs } } = this.props;

    return (
      <div>
          <h1>This confirm:</h1>
          <ul>
              <li>cpfCnpj: {cpfCnpj}</li>
              <li>sobrenome: {sobrenome}</li>
              <li>email: {email}</li>
              <li>obs: {obs}</li>
          </ul>
          <div className="next">
                <button onClick={this.saveAndContinue} className="btn btn-success btn-user">next</button>
                <button onClick={this.back} className="btn btn-warning btn-user">back</button>
           </div> 
      </div>
    )
  }
}

export default Confirm
