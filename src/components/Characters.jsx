export default function Characters({ characters }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {characters.map((character) => (
            <div key={character.id} className="col my-4">
                <div className="card" style={{minWidth: '200px'}}>
                <img src={character.image} alt={character.name} />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <hr />
                    <p className="card-text">Location: {character.location.name}</p>
                    <p className="card-text">Specie: {character.species}</p>
                </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
