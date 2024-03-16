const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

function MapArray() {
    return (
        animals.map((animal) => <p>{animal}</p>)
    )
}

export default MapArray