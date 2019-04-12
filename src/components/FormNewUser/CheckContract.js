import React, { Component } from 'react';

class CheckContract extends Component {
    continue = (e) => {
      e.preventDefault()
      this.props.nextStep()
    }

    
  render() {
      const { values } = this.props;
    return (
      <React.Fragment>
          <div className="bg-login">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-7">
                      <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                          <div className="row">
                            <div className="col">
                              <div className="p-5">
                                <div className="text-center">
                                  <h1 className="h4 text-gray-900">Siga as instruções para se cadastrar.</h1>
                                  <p className="mb-4">Presume-se que você já possua contrato/serviços com a BRConnect.</p>
                                </div>
                                <form className="user col-lg-8 mx-auto">
                                  <div className="form-group">
                                    <input type="text" className="form-control form-control-user" id="inp_cpf_cnpj" pattern="[0-9]*" onChange={this.props.handleChange('cpfCnpj')} placeholder="Informe seu CPF/CPNJ"/>
                                  </div>
                                  <div className="form-group">
                                    <button onClick={this.continue} className="btn btn-success btn-cont">Continuar<i className="fas fa-arrow-circle-right fa-lg ml-2"></i></button>
                                  </div>

                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
      </React.Fragment>
    )
  }
}

export default CheckContract