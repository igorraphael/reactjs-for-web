import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="bg-login">
      <div className="container">
         <div className="row justify-content-center">
           <div className="col-xl-10 col-lg-12 col-md-9">
             <div className="card o-hidden border-0 shadow-lg my-5">
               <div className="card-body p-0">
                 <div className="row">
                   <div className="col-lg-6  d-video">
                     <h1 className="text-white">Área do cliente.</h1>
                     <p className="text-white title-vid">Vídeo explicativo de como realizar o cadastro.</p>
                       <div className="embed-responsive embed-responsive-16by9">
                         <iframe className="embed-responsive-item" id="iframeVideo" src="https://www.youtube.com/embed/IU8Xoz8Hgqk"></iframe>
                     </div>
                   </div>
                   <div className="col-lg-6">
                     <div className="p-5">
                       <div className="text-center">
                         <h1 className="h4 text-gray-900 mb-4">Acesso restrito.</h1>
                       </div>
                       <form className="user">
                         <div className="form-group">
                           <input type="text" className="form-control form-control-user" id="inp_cpf_cnpj" placeholder="CPF/CPNJ"/>
                         </div>
                         <div className="form-group">
                           <input type="password" className="form-control form-control-user" id="inp_senha" placeholder="Senha"/>
                         </div>
                         <a href="index.html" className="btn btn-success btn-user">Entrar</a>
                         <div className="text">
                           <a className="small" href="/esqueci-senha">Esqueceu a senha?</a>
                         </div>
                         <div className="text">
                         <a className="small" href="/cadastro">Não possui uma conta? Cadastre-se</a>
                       </div>
                       <hr />
                         <div className="">
                         <h1 className="h4 text-gray-900 mb-4">BRConnect.net.br</h1>
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
    );
  }
}

export default Login;
