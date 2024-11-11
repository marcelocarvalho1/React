// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <h1>Olá, React!</h1>
//       <p>Este é um simples componente React.</p>
//     </div>
//   );
// };
// const Hello = () => {
//   return <h1>Olá, Mundo!</h1>;
// };

// export {Hello};

// export default App;



// import Header from './components/Header';
// import Banner from './components/Banner';

// const Hello = () => {
//   return (
//     <h1>Hello, World!</h1>
//   );
 
// }
// const App = () => {
//     //Parte logica do component
//   return (
//     // Parte visivel para o usuário 
//     <>
//     <Hello/>
//     <Header />
//     <Banner />
//     </>
//   );
//  }

// export default App;


import { Componente1, Componente2, Componente3 } from './components/VariosComponetes';

const App = () => {
  return (
    <div>
      <Componente1 />
      <Componente2 />
      <Componente3 />
      
      
    </div>
  );
};

export default App;
