import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Modal, Button, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";

const VisualizarDadosIndustria = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(null);
  const handleShow = (item) => setShow(item);
  const handleClose = () => setShow(null);

  useEffect(() => {
    const loadIndustriaData = async () => {
      const { data } = await axios.get("http://localhost:8080/api/user");

      setData(data.data);
    };
    !data && loadIndustriaData();
  }, [data]);

  const handleSubmit = async ({ nome_utilizador, telemovel, email, nif }) => {
    const { data } = await axios.put("http://localhost:8080/api/user/update", {
      nome_utilizador,
      telemovel,
      email,
      nif,
    });

    console.log("res", data);

    setShow(null);
    setData(null);
  };

  // !(null | undefined | [] | '' ) -> true

  if (!data) {
    return "loading ....";
  }
  console.log(data);

  return (
    <>
      <h1 className="display-6 fw-bold">Dados da Indústria</h1>
      <br />
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Cliente</th>
            <th>Nome Cliente</th>
            <th>Telefone</th>
            <th>Telemóvel</th>
            <th>Email</th>
            <th>NIF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={JSON.stringify(item)}>
              <td>{item.id_utilizador}</td>
              <td>{item.nome_utilizador}</td>
              <td>{item.telefone}</td>
              <td>{item.telemovel}</td>
              <td>{item.email}</td>
              <td>{item.nif}</td>
              <td>
                <button onClick={() => handleShow(item)} cursor="pointer">
                  <AiFillEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {Boolean(show) && (
        <Modal show onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Indústria {show.id_empresa}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                gap: "30px",
                flexDirection: "column",
              }}
            >
              <Form.Group>
                <h6>Nome Indústria:</h6>
                <Form.Control
                  type="nome_industria"
                  placeholder="Nome Indústria"
                  name="Nome Indústria"
                  value={show.nome_industria}
                  onChange={(e) =>
                    setShow({ ...show, nome_industria: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>Morada:</h6>
                <Form.Control
                  type="morada"
                  placeholder="Morada"
                  name="Morada"
                  value={show.morada}
                  onChange={(e) => setShow({ ...show, morada: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>Tipo Industria:</h6>
                <Form.Control
                  type="tipo_eletrodomestico"
                  placeholder="Tipo Eletrodomestico"
                  name="Tipo Eletrodomestico"
                  value={show.tipo_industria}
                  onChange={(e) =>
                    setShow({
                      ...show,
                      tipo_industria: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit(show);
              }}
            >
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default VisualizarDadosIndustria;
