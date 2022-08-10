import './App.css';
// import Bienvenu from './component/bienvenu';
// import YearInfo from './component/year-info';
// import people from './data/people.json'
// import PeopleTable from './component/people-table.jsx'
import articlesport from './data/prix.json'
import PrixTable from './component/prix-table.jsx'
// console.log(JSON.stringify(articlesport));
// console.log(articlesport[2].prix);
// console.log(articlesport.length)
// let i=0
// let prixtotal = 0
// for (i=0; i<articlesport.length; i++) {
// prixtotal = prixtotal + articlesport[i].prix
// }
// console.log(prixtotal);

// console.log(test)
function App() {

  return (
    <div className="App">
      {/* <Bienvenu nom='Toni' age={47} /> */}
      {/* <YearInfo year={2022} />
      <YearInfo year={2004} />
      <YearInfo year={-42} /> */}
      {/* <h1>Demo des collections</h1> */}
      {/* <PeopleTable peopleData={people}/> */}
      <h1>Liste de nos articles en magasin</h1>
      <PrixTable prixData={articlesport}/>
      <h1>Merci de votre visite...</h1>
      
    </div>
  );
}

export default App;
