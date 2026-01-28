import { useState, useEffect} from "react";
import "./App.css";
import fosforoimg from "./assets/fosforo.png";
import Settings from "./Settings";

function App() {
  useEffect(() => {
    // Ajusta la altura del viewport dinámicamente
    const adjustHeight = () => {
      const vh = window.innerHeight * 0.01; // 1% del viewport
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Llamar la función para ajustar la altura al cargar la página y cuando se redimensione
    window.addEventListener('resize', adjustHeight);
    window.addEventListener('load', adjustHeight);

    // Limpiar los event listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', adjustHeight);
      window.removeEventListener('load', adjustHeight);
    };
  }, []);






















 const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen((prevState) => !prevState);
  };
  //----------------

  const [countNosotros, setCountNosotros] = useState(0);
  const [countEllos, setCountEllos] = useState(0);
  const [hastaCuanto, setHastaCuanto] = useState(30);

  const esImpar = hastaCuanto % 2 !== 0;
  const limiteMalas = Math.floor(hastaCuanto / 2);

  // ================= TEXTO =================
  const sonMalasNosotros = esImpar || countNosotros <= limiteMalas;
  const sonMalasEllos = esImpar || countEllos <= limiteMalas;

  // ================= FÓSFOROS =================
  const fosforosNosotros = esImpar
    ? countNosotros
    : sonMalasNosotros
    ? countNosotros
    : countNosotros - limiteMalas;

  const fosforosEllos = esImpar
    ? countEllos
    : sonMalasEllos
    ? countEllos
    : countEllos - limiteMalas;

  const renderFosforos = (cantidad, claseGrupo) =>
    Array.from({ length: Math.ceil(cantidad / 5) }).map((_, grupoIndex) => {
      const enGrupo = Math.min(5, cantidad - grupoIndex * 5);

      return (
        <div key={grupoIndex} className={claseGrupo}>
          {Array.from({ length: enGrupo }).map((_, i) => (
            <img
              key={i}
              src={fosforoimg}
              className={`fosforo fosforo${i + 1}`}
              alt="fosforo"
            />
          ))}
        </div>
      );
    });

  // ================= HANDLERS =================
  const sumarNosotros = () => {
    if (countNosotros >= hastaCuanto) return;
    setCountNosotros((c) => c + 1);
  };

  const sumarEllos = () => {
    if (countEllos >= hastaCuanto) return;
    setCountEllos((c) => c + 1);
  };

  return (
    <div className="contenedorPrincipal">
      <div className="pantallaPuntos">
        <span className="black">BLACK</span>
        <button className="aCuanto" onClick={toggleSettings}>
          {hastaCuanto}
        </button>
        <span className="truko">TRUKO</span>
      </div>

      <div className="cajaJuego">
        {/* ================= NOSOTROS ================= */}
        <div className="nosotros">
          <div className="divNemb">
            <p className="nosotrosText">Nosotros</p>
            <p className="sonMalas">
              {countNosotros}
              {esImpar || sonMalasNosotros ? " malas ❌" : " buenas ✅"}
            </p>
          </div>

          <div className="fosforosNosotros">
            {renderFosforos(fosforosNosotros, "grupo")}
          </div>

          <p>{countNosotros}</p>

          <div className="botonesPuntos">
            <button className="botonSumar" onClick={sumarNosotros}>
              +
            </button>
            <button
              className="botonRestar"
              onClick={() => setCountNosotros((c) => Math.max(0, c - 1))}
            >
              -
            </button>
          </div>
        </div>

        {/* ================= ELLOS ================= */}
        <div className="ellos">
          <div className="divNemb">
            <p className="ellosText">Ellos</p>
            <p className="sonMalas">
              {countEllos}
              {esImpar || sonMalasEllos ? " malas ❌" : " buenas ✅"}
            </p>
          </div>

          <div className="fosforosEllos">
            {renderFosforos(fosforosEllos, "grupo2")}
          </div>

          <p>{countEllos}</p>

          <div className="botonesPuntos">
            <button className="botonSumar" onClick={sumarEllos}>
              +
            </button>
            <button
              className="botonRestar"
              onClick={() => setCountEllos((c) => Math.max(0, c - 1))}
            >
              -
            </button>
          </div>
        </div>
      </div>
      {isSettingsOpen && (
        <Settings
          onClose={toggleSettings}
          setHastaCuanto={setHastaCuanto} 
        />
      )}
    </div>
  );
}

export default App;
