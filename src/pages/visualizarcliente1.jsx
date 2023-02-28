import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Modal, Button, Form } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";

const VisualizarDadosCliente = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(null);
  const handleShow = (item) => setShow(item);
  const handleClose = () => setShow(null);

  useEffect(() => {
    const loadClienteData = async () => {
      const { data } = await axios.get("http://localhost:8080/api/cliente");

      setData(data.data);
    };
    !data && loadClienteData();
  }, [data]);

  const handleSubmit = async ({
    id_utilizador,
    nif,
    nome_utilizador,
    telefone,
    morada,
    localidade,
    telemovel,
    email,
  }) => {
    const { data } = await axios.put(
      "http://localhost:8080/api/cliente/update",
      {
        id_utilizador,
        nif,
        nome_utilizador,
        telefone,
        morada,
        localidade,
        telemovel,
        email,
      }
    );

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
      <h1 className="display-6 fw-bold">Dados dos clientes</h1>
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
                <button
                  onClick={() => handleShow(item)}
                  cursor="pointer"
                  style={{ marginRight: 10 }}
                >
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
            <Modal.Title>Editar Cliente: {show.id_utilizador}</Modal.Title>
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
                <h6>Nome Cliente:</h6>
                <Form.Control
                  type="nome_Cliente"
                  placeholder="Nome Cliente"
                  name="Nome Cliente"
                  value={show.nome_utilizador}
                  onChange={(e) =>
                    setShow({ ...show, nome_utilizador: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>Telefone:</h6>
                <Form.Control
                  type="Telefone"
                  placeholder="Telefone"
                  name="Telefone"
                  value={show.telefone}
                  onChange={(e) =>
                    setShow({ ...show, telefone: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>Telemovel:</h6>
                <Form.Control
                  type="Telemovel"
                  placeholder="Telemovel"
                  name="Telemovel"
                  value={show.telemovel}
                  onChange={(e) =>
                    setShow({
                      ...show,
                      telemovel: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>Email:</h6>
                <Form.Control
                  type="EMAIL"
                  placeholder="EMAIL"
                  name="EMAIL"
                  value={show.email}
                  onChange={(e) =>
                    setShow({
                      ...show,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group>
                <h6>NIF:</h6>
                <Form.Control
                  type="NIF"
                  placeholder="NIF"
                  name="NIF"
                  value={show.nif}
                  onChange={(e) =>
                    setShow({
                      ...show,
                      nif: e.target.value,
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

export default VisualizarDadosCliente;
