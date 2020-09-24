import React, { useState, useCallback } from "react";

import api from "../../Services/api";

import { Container } from "./styles";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = useCallback(async () => {
    const response = await api.post("/login", {
      email,
      senha
    });

    if (!response.data) {
      alert("Dados incorretos");
    }
  }, [email, senha]);

  return (
    <Container>
      <form onSubmit={e => e.preventDefault()}>
        <h2>Um formulário simples</h2>

        <div>
          <span>E-mail:</span>
          <input
            type="text"
            placeholder="fulano@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="------"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <center>
          <button onClick={handleSubmit}>
            Sign In
        </button>
        </center>
      </form>
    </Container>
  );
}

export default LoginPage;