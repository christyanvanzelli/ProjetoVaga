import { Events, Icon, IconData, Logo, Logout, Menu, More, Online, Plus, Search, Subscribe, Team } from "@/components/svg";


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
  <div className="profile">
    <Icon />
    <div className="info">
      <p className="name">Kaique Steck</p>
      <p className="role">Administrador</p>
    </div>
  </div>

  <button className="menu-item">
    <IconData />
    <span>Alterar dados</span>
  </button>

  <button className="menu-item">
    <Logout /> 
    <span>Sair</span>
  </button>
</div>
      </aside>

      <main>
        <header>
          <h2>Bem vindo de volta, <strong>Kaique Steck</strong></h2>
          <h2 className="welcome-letter">Todos eventos</h2>
        </header>

            
        <section className="content">
        <form className="event-form">
            <div className="form-header">
              <p className="events-search">
                <Search/>
                Buscar Eventos</p>
              <p className="insert">
                <Plus/>
                Inserir Novo</p>
            </div>

            <div className="table-header">
              <span>Nome do evento</span>
              <span>Total de equipes</span>
              <span>Status</span>
              <span>Data</span>
            </div>

            <div className="table-row">
                <p className="name-form"> Clube do laço coração pantaneiro</p>
                <p className="total-team">10</p>
             <div>
                <p className="online-div">
                  <Online className="online"/>
                  ativo</p>
                </div>  
                  <p className="data-form">09 a 11 de junho</p>
                  
                  <p><More className="more"/></p>
            </div>
            <div className="table-row">
                <p className="name-form">Clube Laço do coração pantaneiro</p>
                <p className="total-team">10</p>
                
             <div>
                <p className="online-div">
                  <Online className="online"/>
                  ativo</p>
                </div>  
                  <p className="data-form">09 a 11 de junho</p>
                  
                  <p><More className="more"/></p>
            </div>
            

            <div className="form-actions">
              <p className="proxima">Proxima</p>
                <p className="button-table">1</p>
                <p className="button-table">2</p>
                <p className="button-table">3</p>
              <p className="anterior">Anterior</p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
