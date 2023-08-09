console.log(window.location);

const pagina =
   window.location.pathname === "/" ? (
      <h1> Olá Mundo!</h1>
   ) : (
      <h1> Sobre Mim...</h1>
   );

function App() {
   return pagina;
}

export default App;
