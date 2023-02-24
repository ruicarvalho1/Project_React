import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const CriarCliente = () => {
  //const [id_ecoponto, setText] = useState(""); //criar comentario, temos de colocar o autor e conteudo

  const [nome_utilizador, setnome_utilizador] = useState("");
  const [telefone, settelefone] = useState("");
  const [telemovel, settelemovel] = useState("");
  const [email, setemail] = useState("");
  const [nif, setnif] = useState("");

  const addIndustria = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/user/create", {
        nome_utilizador,
        telefone,
        telemovel,
        email,
        nif,
      })
      .then((response) => {
        alert("Indústria adicionada com sucesso");
      });
  };

  return (
    <Form>
      <h1 className="display-6 fw-bold">Criar Cliente</h1>
      <br />

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Nome Completo do cliente
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="Nome "
            onChange={(event) => {
              setnome_utilizador(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Telefone
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="telemovel"
            onChange={(event) => {
              settelefone(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Telemovel
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="telemovel"
            onChange={(event) => {
              settelemovel(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Email
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          NIF
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="nif"
            onChange={(event) => {
              setnif(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <br />

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <br />
          <button
            class="btn btn-primary"
            variant="primary"
            size="lg"
            onClick={addIndustria}
          >
            Enviar
          </button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default CriarCliente;
