import React, { Component } from "react";

import Input from "./Input";

class Form extends Component {
  linkState(component, attr) {
    return {
      value: component.state.participante[attr],
      set(x) {
        const participante = { ...component.state.participante };
        participante[attr] = x;
        component.setState({ participante });
      }
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 order-md-1">
          <form
            onSubmit={this.props.onSubmit}
            id="formulario"
            className="needs-validation"
            noValidate=""
          >
            <input type="hidden" id="atualizacao" />
            <input type="hidden" id="id" />

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nome">Nome</label>
                <Input
                  type="text"
                  link={this.linkState(this.props.component, "nome")}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="sobrenome">Sobrenome</label>
                <Input
                  type="text"
                  link={this.linkState(this.props.component, "sobrenome")}
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  link={this.linkState(this.props.component, "email")}
                  required
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="idade">Idade</label>
                <Input
                  type="number"
                  link={this.linkState(this.props.component, "idade")}
                  required
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="nota">Nota</label>
                <Input
                  type="number"
                  link={this.linkState(this.props.component, "nota")}
                  required
                />
              </div>
              <div className="col mb-3">
                <label htmlFor="sexo">Sexo</label>
                <select
                  value={this.props.participante.sexo}
                  onChange={this.props.onChange}
                  className="custom-select d-block w-100"
                  name="sexo"
                  required=""
                >
                  <option value="">Selecione...</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                </select>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
