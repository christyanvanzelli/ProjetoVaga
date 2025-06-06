import { Events, Logo, Menu, Subscribe, Team } from "@/components/svg";

export default function EventosPage() {
  return (
    <div className="layout">
      <aside>
        <div id="logo-container">
          <Logo className="logo" />
        </div>
        <div id="menu">
          <span>MENU</span>
          <button>
            <Menu />
            Dashboard
          </button>
          <button>
            <Events />
            Eventos
          </button>
          <button>
            <Team />
            Equipes
          </button>
          <button>
            <Subscribe />
            Inscrição
          </button>
        </div>
        <div id="menu2">
            <div>...</div>
        </div>
      </aside>

      <main>
        <header>
          <h2>Bem vindo de volta, <strong>Kaique Steck</strong></h2>
          <h2 className="welcome-letter">Todos eventos</h2>
        </header>
        <section className="content">
          <h1>...</h1>
        </section>
      </main>
    </div>
  );
}
