import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { FormGroup } from "react-bootstrap";

const CriarCliente = () => {
  //const [id_ecoponto, setText] = useState(""); //criar comentario, temos de colocar o autor e conteudo

  const [nome_utilizador, setnome_utilizador] = useState("");
  const [telefone, settelefone] = useState("");
  const [telemovel, settelemovel] = useState("");
  const [email, setemail] = useState("");
  const [nif, setnif] = useState("");
  const { register, setValue } = useForm();

  const addIndustria = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/cliente/create", {
        nif,
        nome_utilizador,
        telefone,
        telemovel,
        email,
      })
      .then((response) => {
        alert("Cliente adicionado com sucesso");
      });
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://api.duminio.com/ptcp/v2/ptapi63fdd937b4d451.76782176/${cep}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const endereco = data.shift();
        setValue("Localidade", endereco.Freguesia);
        setValue("Concelho", endereco.Concelho);
        setValue("Distrito", endereco.Distrito);
        setValue("Morada", endereco.Morada);
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
            placeholder="Telefone"
            onChange={(event) => {
              settelefone(event.target.value);
            }}
            maxLength="9"
            minLength="9"
            required
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
            maxLength="9"
            minLength="9"
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column sm={2} xl={4}>
          Email
        </Form.Label>
        <Col sm={10} xl={8}>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
      <FormGroup>
        <form>
          <label>
            Código Postal:
            <input type="text" {...register("cep")} onBlur={checkCEP} />
          </label>
          <label>
            Morada:
            <input type="text" {...register("Morada")} />
          </label>
          <label>
            Morada:
            <input type="text" {...register("Morada2")} />
          </label>
          <label>
            Localidade:
            <input type="text" {...register("Localidade")} />
          </label>
          <label>
            Concelho:
            <input type="text" {...register("Concelho")} />
          </label>
          <label>
            Distrito:
            <input type="text" {...register("Distrito")} />
          </label>
        </form>
      </FormGroup>
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
