function AnimalList(props) {
  const animals = props.animals;
  const listAnimals = animals.map((animal) =>
  <li>{animal}</li>
  );
  return (
  <ul>{listAnimals}</ul>
  );
}

export default AnimalList