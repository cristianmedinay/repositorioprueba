function ComponentePulsacion(){

    function getionTeclas(event){

        return console.log(event.target.value);
    }


    function CreateHeader(num) {

        switch (num) {
    
          case 1:
            return <p>Este es un ejemplo 1</p>
          case 2:
            return <p>Este es un ejemplo 2</p>
         
          default:
            return <p> de nuevo develop</p>
    
        }
    
      }

    return(

        <div>
            ComponentePulsacion


            <div className="form-group">
              <label for=""></label>
              <input 
                onKeyUp={getionTeclas}
                
                type="text"
                juanName="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>

                <div>{CreateHeader(getionTeclas)} </div>
              <input type="number"
              className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            <button className="btn btn-danger">pulsar 1</button>
            <button className="btn btn-danger" onClick={ ()=>{
                console.log('pulsado');
            }}>pulsar 2</button>

            </div>

        </div>
    );
}

export default ComponentePulsacion;