import { useState, useEffect } from 'react'
import './App.css'
import fosforoimg from './assets/fosforo.png'

function App() {
  const [countNosotros, setCountNosotros] = useState(0)
  const [countEllos, setCountEllos] = useState(0)
  const [hastaCuanto, setHastaCuanto] = useState(30)
  const [fosforo, setFosforo] = useState([])

  const [grupo, setGrupo] = useState([])

  const agregarFosforo = () => {
    setFosforo(prev => [...prev, {}]);
  };

  const quitarFosforo = () => {
    setFosforo(prev => prev.slice(0, -1))
  }

  /*SECCION 2 NUEVO PARA GRUPO ELLOS*/
  const [fosforo2, setFosforo2] = useState([])

  const [grupo2, setGrupo2] = useState([])

  const agregarFosforo2 = () => {
    setFosforo2(prev => [...prev, {}]);
  };

  const quitarFosforo2 = () => {
    setFosforo2(prev => prev.slice(0, -1))
  }

/*FIN SECCION 2*/

  return (
    <div className='contenedorPrincipal'>

      <div className='pantallaPuntos'>
        <div><span className='black'>BLACK</span></div>
        <div><button className='aCuanto'>{hastaCuanto}</button></div>
        <div><span className='truko'>TRUKO</span></div>
      </div>

      <div className='cajaJuego'>
        <div className='nosotros'>
          <p>Nosotros</p>
          <div className='fosforosNosotros'>
            {Array.from({ length: Math.ceil(fosforo.length / 5) }).map((_, grupoIndex) => {
              // Calculamos los fósforos que van en este grupo
              const fosforosEnGrupo = fosforo.slice(grupoIndex * 5, grupoIndex * 5 + 5);

              return (
                <div key={grupoIndex} className='grupo'>
                  {fosforosEnGrupo.map((_, fosforoIndex) => {
                    const numeroClase = fosforoIndex + 1; // Para clases fosforo1, fosforo2...
                    return (
                      <img
                        key={fosforoIndex}
                        src={fosforoimg}
                        className={`fosforo fosforo${numeroClase}`}
                        alt="fosforo"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p>{countNosotros}</p>
          <div className='botonesPuntos'>
            <button className='botonSumar' onClick={() => { setCountNosotros(countNosotros + 1); agregarFosforo() }}>+</button>
            <button className='botonRestar' onClick={() => { setCountNosotros(prev => Math.max(0, prev - 1)); quitarFosforo() }}>-</button>
          </div>
        </div>
        <div className='ellos'>
          <p>Ellos</p>

          <div className='fosforosEllos'>
            {Array.from({ length: Math.ceil(fosforo2.length / 5) }).map((_, grupoIndex) => {
              // Calculamos los fósforos que van en este grupo
              const fosforosEnGrupo = fosforo2.slice(grupoIndex * 5, grupoIndex * 5 + 5);

              return (
                <div key={grupoIndex} className='grupo2'>
                  {fosforosEnGrupo.map((_, fosforoIndex) => {
                    const numeroClase = fosforoIndex + 1; // Para clases fosforo1, fosforo2...
                    return (
                      <img
                        key={fosforoIndex}
                        src={fosforoimg}
                        className={`fosforo fosforo${numeroClase}`}
                        alt="fosforo"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>






          <p>{countEllos}</p>
          <div className='botonesPuntos'>
            <button className='botonSumar' onClick={() => { setCountEllos(countEllos + 1); agregarFosforo2() }}>+</button>
            <button className='botonRestar' onClick={() => { setCountEllos(prev => Math.max(0, prev - 1)); quitarFosforo2() }}>-</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
