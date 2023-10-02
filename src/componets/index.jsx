import {useState} from "react"
export default function Index() {
    
   const [numero,setNumero] = useState (0);
  
   const add = () => {
    if(numero <10){
        setNumero(numero +1)
    }
   }

const sub = () =>{
    if (numero >0){
        setNumero(numero-1)
    }
}

    return (
        <main>
        <section>
            <h1>{numero}</h1>
            <div className="buttons">
            <button onClick={() =>{sub()}}>-</button>
            <button onClick={() =>{add()}}>+</button>
            </div>
        </section>
        </main>
    )
}
