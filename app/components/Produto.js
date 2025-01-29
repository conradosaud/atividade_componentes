function Produto( attr ) {
    return ( 
        <div className="border-solid border w-1/5 bg-zinc-50 p-5 " >
            
            <div className="text-center">
                <img  src="https://placehold.co/200"/>
            </div>

            <h2 className="text-lime-800"> {attr.nome} </h2>
            <p>{attr.avaliacao}</p>
            <p> R$ {attr.preco} </p>
            <button className="p-3 bg-sky-700 text-white border-none"> {attr.botao} </button>
        </div>
    );
}

export default Produto;