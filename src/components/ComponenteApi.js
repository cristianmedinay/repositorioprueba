import ComponenteAdicional from '../components/ComponenteAdicional';
import '../App.css';

function ComponenteApi(){

  let usuariosAPI = {
    results: [
      {
        gender: "male",
        name: { title: "Mr", first: "?????", last: "??? ???" },
        location: {
          street: { number: 7297, name: "???? ?????" },
          city: "?????",
          state: "?????? ????",
          country: "Iran",
          postcode: 71299,
          coordinates: { latitude: "34.0065", longitude: "-86.9481" },
          timezone: {
            offset: "-6:00",
            description: "Central Time (US & Canada), Mexico City",
          },
        },
        email: "adryn.nkwnzr@example.com",
        login: {
          uuid: "0b3bd94a-bb84-4175-a703-9351744b1270",
          username: "beautifulelephant642",
          password: "jello",
          salt: "USIreEv6",
          md5: "877dcd32a284362d69a54f4d0607e45b",
          sha1: "c9aa80a256acd6519c16d02d48bd50ddba0c38e5",
          sha256:
            "f545de63abd8a7ec270946abcb9c9f41e48b786db7b24f63c6e80dacc54234a1",
        },
        dob: { date: "1957-12-20T11:00:38.615Z", age: 65 },
        registered: { date: "2008-07-14T09:46:34.055Z", age: 14 },
        phone: "042-27014093",
        cell: "0995-627-9649",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/men/9.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
        },
        nat: "IR",
      },
      {
        gender: "male",
        name: { title: "Mr", first: "Noah", last: "Kristensen" },
        location: {
          street: { number: 1898, name: "Gr�nlandsvej" },
          city: "St.Merl�se",
          state: "Syddanmark",
          country: "Denmark",
          postcode: 20704,
          coordinates: { latitude: "72.8249", longitude: "-44.2124" },
          timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
        },
        email: "noah.kristensen@example.com",
        login: {
          uuid: "e9a3bf97-f53b-46e3-8ce1-f0cd5479697a",
          username: "organicladybug667",
          password: "heynow",
          salt: "7bW2trBJ",
          md5: "eb0359ff594d523091ea9275a0e46def",
          sha1: "30b133362f3bed6a120f8654910ad7fbcc0298e7",
          sha256:
            "b66cef87148d8c6dc522975aca1d43ae9075fa39635cfb36a62e3ba314e41e15",
        },
        dob: { date: "1994-03-29T23:07:19.673Z", age: 28 },
        registered: { date: "2004-01-06T09:58:45.461Z", age: 18 },
        phone: "78625356",
        cell: "11232672",
        id: { name: "CPR", value: "290394-4182" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/62.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        },
        nat: "DK",
      },
      {
        gender: "female",
        name: { title: "Miss", first: "Bernice", last: "Reynolds" },
        location: {
          street: { number: 4689, name: "Walnut Hill Ln" },
          city: "Albany",
          state: "Queensland",
          country: "Australia",
          postcode: 4318,
          coordinates: { latitude: "75.0059", longitude: "-143.0762" },
          timezone: {
            offset: "-7:00",
            description: "Mountain Time (US & Canada)",
          },
        },
        email: "bernice.reynolds@example.com",
        login: {
          uuid: "9bea3858-a223-4539-b372-c40a1b427f07",
          username: "goldenpeacock165",
          password: "modena",
          salt: "CtYOoahX",
          md5: "132657835e244156ba432d86f25fecd3",
          sha1: "4f21f42e0b9e1ec13ffd26f3369d1239e123b8ad",
          sha256:
            "bbc133c3bad331ae56f927b18e70d24b090e39d5b6f38f0360baff6505af8b5e",
        },
        dob: { date: "1970-03-05T22:50:00.169Z", age: 52 },
        registered: { date: "2013-10-17T08:43:53.161Z", age: 9 },
        phone: "01-0743-0681",
        cell: "0415-197-602",
        id: { name: "TFN", value: "343998419" },
        picture: {
          large: "https://randomuser.me/api/portraits/women/26.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
        },
        nat: "AU",
      },
      {
        gender: "female",
        name: { title: "Mrs", first: "Esma", last: "Kaplang?" },
        location: {
          street: { number: 6589, name: "Atat�rk Sk" },
          city: "Trabzon",
          state: "�anakkale",
          country: "Turkey",
          postcode: 40304,
          coordinates: { latitude: "28.7037", longitude: "-13.3180" },
          timezone: {
            offset: "+11:00",
            description: "Magadan, Solomon Islands, New Caledonia",
          },
        },
        email: "esma.kaplangi@example.com",
        login: {
          uuid: "5ca302c9-5b17-4a42-9c75-1ad2392eca14",
          username: "brownfish794",
          password: "curious",
          salt: "FgERHAMQ",
          md5: "1a78ec554097f92e03906736e64b9e62",
          sha1: "8e6bb596334d3839d8201421471c5c48f20dda33",
          sha256:
            "93ff9c30617abf0dc3ec97c1907d99f3c19aecb645ec11e584da20cae968d166",
        },
        dob: { date: "1967-03-25T08:00:52.835Z", age: 55 },
        registered: { date: "2003-12-12T21:30:11.849Z", age: 19 },
        phone: "(085)-768-9456",
        cell: "(385)-695-5692",
        id: { name: "", value: null },
        picture: {
          large: "https://randomuser.me/api/portraits/women/91.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/91.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/91.jpg",
        },
        nat: "TR",
      },
      {
        gender: "male",
        name: { title: "Mr", first: "Marius", last: "Madsen" },
        location: {
          street: { number: 5861, name: "Humlevej" },
          city: "Aarhus N",
          state: "Hovedstaden",
          country: "Denmark",
          postcode: 44756,
          coordinates: { latitude: "-35.4485", longitude: "-23.4501" },
          timezone: {
            offset: "+11:00",
            description: "Magadan, Solomon Islands, New Caledonia",
          },
        },
        email: "marius.madsen@example.com",
        login: {
          uuid: "6efe62f6-ea57-46fa-8c35-817b869b444c",
          username: "happybear143",
          password: "lookout",
          salt: "u3HZNh55",
          md5: "d5469a7920f4aafefeb347e4637bf8b4",
          sha1: "03a8d44ad80ec4ae1e7bfa89d657954641b21454",
          sha256:
            "592ab7b04b8be74093dc97e724a7a48028a6882b3682c3830719cb7ad2e60565",
        },
        dob: { date: "1973-01-31T21:29:58.400Z", age: 49 },
        registered: { date: "2015-03-14T04:55:38.151Z", age: 7 },
        phone: "27625695",
        cell: "57839801",
        id: { name: "CPR", value: "310173-4499" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/60.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
        },
        nat: "DK",
      },
    ],
    info: { seed: "ec5b6d0845873293", results: 5, page: 1, version: "1.3" },
  };



  let numero = 12;

  //let num = document.getElementsByClassName("numero")[0].value;

  let contenido = ['Youtube', 'Amazon', 'Google', 'Facebook'];

  function CreateHeader(num) {

    switch (num) {

      case 1:
        return <p>Este es un ejemplo 1</p>
      case 2:
        return <p>Este es un ejemplo 2</p>
      case 3:
        return <p>Este es un ejemplo 3</p>
      default:
        return <p>Este es parrafo no existe porfa repite de nuevo</p>

    }

  }
  //            <input type="number" name="numero" className="numero" />

  return (
    <div className="App container">

      <h1>Aplicacion reac</h1>
      <p>Primer aplicacion react</p>
      <div className="row">
        <div className="col columna-uno">
          <h2>Elementos de un Componente</h2>
          <h3>Sentencia ELIF</h3>
          <div>
            {numero > 10 && (<div className="alert alert-primary" role="alert">
              A simple primary alert?check it out!
            </div>)}
          </div>
          <h3>Sentencia Switch</h3>
          <div>
            <p>{CreateHeader(2)}</p>
          </div>
          <h3>Sentencia For</h3>








          <div>
            <ul>{
              contenido.map(element => {

                return <li> {element} </li>;

              })

            }</ul>
          </div>

        </div>
        <div className="col columna-dos">
          <h2>Elementos de un Componente</h2>

          <ComponenteAdicional/>

          <p>{CreateHeader(3)}</p>


          <div className="row">
              {usuariosAPI.results.map( (element,index)=>

                  
                 <div className="col" key={index}>
                  <div className="card" >

                    <img src={element.picture.medium} className="card-img-top"></img>
                    <div className="card-body">
                      <h5 className="card-title">{element.name.first}{element.name.last}  </h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )

              }

          </div>


        

        </div>
      </div>
    </div>
  );


}
export default ComponenteApi;