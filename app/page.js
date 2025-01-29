import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
    return (
    <div>

        <Menu/>  
      
        <h1>Enviando para o Github</h1>
        <p>Atividade em andamento...</p>
        <p>Testando uma nova versão</p>

        <hr/>

        <h2>Produtinhux</h2>

        <div className="flex justify-around">
            
            <Produto nome="Cappuccino com canela" preco="5,60" botao="Comprar" avaliacao="⭐" />
            <Produto nome="Café coado" preco="3,50" botao="Encomendar" avaliacao="⭐⭐⭐" />
            <Produto nome="Café espresso" preco="4,99" botao="Comprar" avaliacao="⭐⭐"/>

        </div>
      
    
    </div>
    );
}
