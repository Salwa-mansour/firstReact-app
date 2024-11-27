function ListItem(props) {
    return <li key={crypto.randomUUID()}>{props.animal}</li>
  }
  
  function List(props) {
    return (
      <ul>
     {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
      </ul>
    );
  }
  
  function ListDom() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }
  


export default ListDom