import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const CriarCliente = () => {
  //const [id_ecoponto, setText] = useState(""); //criar comentario, temos de colocar o autor e conteudo

  const [morada, setmorada] = useState("");
  const [tipo_industria, settipo_industria] = useState("");
  const [nome_industria, setnome_industria] = useState("");

  const addIndustria = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/empresa_dona_ecopontos/create", {
        morada,
        tipo_industria,
        nome_industria,
      })
      .then((response) => {
        alert("Indústria adicionada com sucesso");
      });
  };

  return (
    <Form>
      <h1 className="display-6 fw-bold">Criar Indústria</h1>
      <br />

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Nome Industria
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="Nome Industria"
            onChange={(event) => {
              setnome_industria(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Morada
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="Morada"
            onChange={(event) => {
              setmorada(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} xl={4}>
          Tipo Eletrodomésticos
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="text"
            placeholder="Tipo Eletrodomésticos"
            onChange={(event) => {
              settipo_industria(event.target.value);
            }}
          />
        </Col>
      </Form.Group>
      <br />
      <br />
      <br />
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <br />
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
