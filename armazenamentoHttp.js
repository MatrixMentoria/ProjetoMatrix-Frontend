function Armazenamento(urlBase) {
  urlBase = urlBase || "http://matrix.avalie.net/api/participantes";

  function adicionar(item) {
    return axios
      .post(urlBase, item)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error.response.data.message;
      });
  }

  function atualizar(item) {
    return axios
      .put(urlBase + "/" + item.id, item)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error.response.data.message;
      });
  }

  function remover(id) {
    return axios.delete(urlBase + "/" + id).then(res => res.data);
  }

  function obterTodosOsItens() {
    return axios.get(urlBase).then(res => {
      return res.data;
    });
  }

  return {
    adicionar,
    remover,
    atualizar,
    //obterItem,
    //obterItens,
    obterTodosOsItens
  };
}
