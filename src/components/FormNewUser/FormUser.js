import React, { Component } from 'react';
import CheckContract from './CheckContract';
import Confirm from './Confirm';
import Success from './Success';

class FormUser extends Component {
    state = {
        step: 1,
        cpfCnpj: '',
        sobrenome:'',
        email:'',
        obs:''
    }
    //Processa o proximo passo
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        })
    }
    //Processa o passo anterior
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step : step - 1
        })
    }
    
    //Handle fields change
    handleChange = input => e =>{
        this.setState({ [input]: e.target.value });
    }

    //accept only numbers
    onlyNumber = input => e =>{
        console.log('oii');
        //this.setState({ [input]: e.target.value });

    }

  render() {
      const { step } = this.state;
      const { cpfCnpj, sobrenome, email, obs } = this.state;
      const values = { cpfCnpj, sobrenome, email, obs }

      switch(step){
        case 1:
        return  <CheckContract
                    onKeyPress={this.onlyNumber} 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
        case 2:
        return <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
        case 3:
        return <Success />
      }

  }
}

export default FormUser;
