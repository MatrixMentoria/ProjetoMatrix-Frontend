import React, { Component } from "react";

import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Participantes</span>
            <span className="badge badge-secondary badge-pill total_participantes">
              {this.props.participantes.length}
            </span>
          </h4>
          {/* esse elemento irá receber os participantes */}
          <ul className="list-group mb-3">
            {this.props.participantes.map(p => (
              <ListItem
                key={p.id}
                participante={p}
                onEditar={this.props.onEditar}
                onDelete={this.props.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
