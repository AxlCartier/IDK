
const List = (props) => {

    return(
        <>
            {props.date.map((d) => (
                <div>
                    <div className="one">
                        <img src={d && d.sprites.front_default} alt="Pokemon Picture" width="200"id="PKP" />
                        <img src={d && d.sprites.back_shiny} width="200" alt="Pokemon Picture" />
                    </div>
                
                    <div className="two">
                        <h2>Name: {d && d.name}</h2>
                        <h2>Height: {d && d.height}</h2>
                        <h2>Weight: {d && d.weight}</h2>
                    </div>
                </div>
            ))}
        </>
    )
}

export default List