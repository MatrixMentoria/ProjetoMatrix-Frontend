import React, { Component } from "react";

class ListItem extends Component {
  state = {};

  render() {
    const SEXO = {
      "1": "Masculino",
      "2": "Feminino"
    };
    const { nome, idade, sexo, email, nota, id } = this.props.participante;
    const info = `${idade} de idade, sexo ${
      SEXO[sexo]
    }, email: ${email}, tirou ${nota}`;

    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{nome}</h6>
          <small className="text-muted">{info}</small>
        </div>
        <span className="text-muted">
          <a
            href="javascript:void(0)"
            onClick={() => this.props.onEditar(this.props.participante)}
          >
            Editar
          </a>{" "}
          |{" "}
          <a
            href="javascript:void(0)"
            onClick={() => this.props.onDelete(this.props.participante)}
          >
            Excluir
          </a>{" "}
        </span>
      </li>
    );
  }
}

export default ListItem;
