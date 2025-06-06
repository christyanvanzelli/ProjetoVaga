'use client';

import Button from "@/components/eventPage";
import { useValidation } from "@/components/validation"; // ajuste aqui
import { useState } from "react";

export default function Page() {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleValidation, error } = useValidation(); // ajuste aqui

  const togglePasswordVisibility = () => {
    setIsShow((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation(email, password);
  };

  return (
    <section id="form-section">
      <form onSubmit={handleSubmit}>
        <div id='logo-container'>
          <div id='img1'></div>
        </div>
        <h1>Bem-vindo de volta</h1>
        <span>Entre com sua conta para acessar o painel</span>

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
          placeholder="seunome@seuservidor.com"
        />

        <label htmlFor="senha">Senha:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type={isShow ? "text" : "password"}
          id="senha"
          name="senha"
          placeholder="Digite aqui"
        />
        <div id="view-pass" onClick={togglePasswordVisibility}></div>

        {/* Exibe a mensagem de erro se houver */}
        {error && <p className="text-red-600 mt-2">{error}</p>}

        <Button />

        <div id="section-img"></div>
        <div id="img"></div>
      </form>
    </section>
  );
}
