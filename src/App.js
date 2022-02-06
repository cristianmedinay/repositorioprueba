import ComponenteApi from './components/ComponenteApi';
import ComponentePulsacion from './components/ComponentePulsacion';
import ComponenteState from './components/ComponenteState';
import ComponenteProps from './components/ComponenteProps';
import ComponenteProt from './components/ComponenteProt';

function App() {

      /*  */
      return (
      
      <div className='container'>


            <div className='row'>

                  <div className='col componente-pulsacion'>
                        <ComponentePulsacion/>
                  </div>
                  <div className='col componente-state'>
                        <ComponenteState/>
                  </div>

            </div>
            <div className='row'>
                  <div className='col componente-props'>
                        <ComponenteProps/>
                  </div>
                  <div className='col componente-prot'>
                 
                        <ComponenteProt/>
                  </div>
            </div>
            
      </div>
      
      
      );
}

export default App;
