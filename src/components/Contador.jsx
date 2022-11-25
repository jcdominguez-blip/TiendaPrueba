import { useState } from "react"
import Button from "./Button"

const [ contador, setContador] = useState (0)
const [fecha, setFecha] = useState (null);

const handleAdd = () = > {
    console.log ("quiero sumar");
    setContador( contador + 1 )
    const date = new Date ().toLocaleString();

};

const handleSubstract = () = > {
    console.log ("quiero restar")

}

return
    <div className="grid">
    <Button onClick={() = > handleAdd ()}> Sumar </Button>
    <span>{contador}</span>
    <Button onClick={() => handleSubstract ()}> Restar </Button>
    </div>
    );

};