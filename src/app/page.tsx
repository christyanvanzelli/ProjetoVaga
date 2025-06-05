'use client';

import { useState } from "react";

export default function Page() {
  const [isShow, setIsShow] = useState(false);

  const togglePasswordVisibility = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <section id="form-section">
      <form>
        <div id='logo-container'> 
          <div id='img1'></div>
        </div>
        <h1>Bem-vindo de volta</h1>
        <span>Entre com sua conta para acessar o painel</span>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="seunome@seuservidor.com"
        />
        <label htmlFor="senha">Senha:</label>
          <input
            type={isShow ? "text" : "password"}
            id="senha"
            name="senha"
            placeholder="Digite aqui"
          /> 
        <div id="view-pass" onClick={togglePasswordVisibility}></div>
           
            
          
        
        <button type="submit">enviar</button> 
        <div id="section-img"></div>
        <div id="img"></div>
      </form>
    </section>
  );
}
