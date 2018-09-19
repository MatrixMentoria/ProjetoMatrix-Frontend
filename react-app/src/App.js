import React, { Component } from "react";
import axios from "axios";

import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  state = {
    participante: this.getInitialParticipanteState(),
    emEdicao: false,
    participantes: []
  };

  getInitialParticipanteState() {
    return {
      id: "",
      nome: "",
      sobrenome: "",
      email: "",
      idade: "",
      nota: "",
      sexo: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://matrix.avalie.net/api/participantes").then(res => {
      const participantes = res.data;
      this.setState({ participantes });
    });
  };

  handleEditar = participante => {
    this.setState({ emEdicao: true });
    this.setState({ participante });
  };

  handleDelete = participante => {
    const url = "http://matrix.avalie.net/api/participantes/" + participante.id;
    axios.delete(url).then(res => {
      const participantes = [...this.state.participantes];
      const index = participantes.findIndex(p => {
        return participante.id === p.id;
      });
      participantes.splice(index, 1);
      this.setState({ participantes });
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (this.state.emEdicao) {
      const url =
        "http://matrix.avalie.net/api/participantes/" +
        this.state.participante.id;

      axios.put(url, this.state.participante).then(res => {
        const participantes = [...this.state.participantes];
        const index = participantes.findIndex(
          p => p.id === this.state.participante.id
        );
        participantes[index] = { ...this.state.participante };
        this.setState({ participantes });
        this.setState({ participante: this.getInitialParticipanteState() });
        this.setState({ emEdicao: false });
      });
    } else {
      const url = "http://matrix.avalie.net/api/participantes/";
      const participante = { ...this.state.participante };
      delete participante.id;
      axios.post(url, participante).then(res => {
        const participantes = [...this.state.participantes];

        participantes.push(res.data);
        this.setState({ participantes });
        this.setState({ participante: this.getInitialParticipanteState() });
        this.setState({ emEdicao: false });
      });
    }
  };

  handleChangeFormField = e => {
    console.log(e.target.name, e.target.value);
    const participante = { ...this.state.participante };
    participante[e.target.name] = e.target.value;

    this.setState({ participante });
  };

  render() {
    return (
      <div className="container">
        {/* <CustomInput /> */}
        <Title />
        <Form
          participante={this.state.participante}
          component={this}
          onChange={this.handleChangeFormField}
          onSubmit={this.handleSubmit}
        />
        <List
          participantes={this.state.participantes}
          onEditar={this.handleEditar}
          onDelete={this.handleDelete}
        />
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
