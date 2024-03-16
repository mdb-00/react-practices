const jokes = [
    {
    "id": 1,
    "setup": "What's the best thing about a Boolean?",
    "punchline": "Even if you're wrong, you're only off by a bit"
    },
    {
    "id": 2,
    "setup": "Why do programmers wear glasses?",
    "punchline": "Because they need to C#"
    }
]

function MapJson() {
    return (
        <div>
        {jokes.map((item, index) => (
          <div key={index}>
            <h1>{item.setup}</h1>
            <p>{item.punchline}</p>
          </div>
        ))}
      </div>
      );
}

export default MapJson