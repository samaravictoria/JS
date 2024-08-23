import Cabecalho from "./components/cabecalho";


export default function App (){

const titulo:string = "Minha Página"

// EXEMPLOS de const e como fazer: 

// -> const numero:number = 16;

// -> const listaNomes:string[] = ["Pedro", "Orlando", "Vicente"]; 

//-> const aluno = (nome:string, idade:number, vivo:boolean) = (
//      nome: "Pedro",
//      idade: 26,
//      vivo: true)


  return (
  <div>
    <h1>Componente App</h1>
    <Cabecalho tituloProps= {titulo}/>
  </div>
  )  
}

