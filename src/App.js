//Logo
import logo from './Assets/Logo.jpg'

//states
import React, { useState } from 'react'

import './App.css'

function App() {
  const [conteudoE, setconteudoE] = useState('')
  const [conteudoS, setconteudoS] = useState('')

  const verificar = () => {
    if (conteudoE.trim() !== '') {
      setconteudoE('válido')
    } else {
      setconteudoE('inválido')
    }
    //
    if (conteudoS.trim() !== '') {
      setconteudoS('valido')
    } else {
      setconteudoS('inválido')
    }
  }

  return (
    <div className="App">
      <div className="App">
        <section>
          <main>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1>Acesse a plataforma</h1>
            <p className="description">
              Faça login ou registre-se para começar a construir <br />
              seus projetos ainda hoje
            </p>
            <form>
              <label htmlFor="Email" className="Email">
                <p>E-mail</p>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  name="Email"
                  onChange={e => setconteudoE(e.target.value)}
                />
                <span className="verifikE">{conteudoE}</span>
              </label>
              <label htmlFor="Senha" className="Senha">
                <p>Senha</p>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  name="Senha"
                  onChange={s => setconteudoS(s.target.value)}
                />
                <span className="verifikS">{conteudoS}</span>
              </label>
              <button type="button" onClick={verificar}>
                Entrar
              </button>
            </form>
            <footer>
              <p>
                Ainda não tem uma conta? <a>Inscreva-se</a>
              </p>
            </footer>
          </main>
        </section>
      </div>
    </div>
  )
}

export default App
