

const Eff1 = ({data}) =>{
    return(
        
        <div id = "main">

            {data?.map((v,i) =>(
                <div id = "card" key={i}>
                    <img src={v.image} alt="" />
                    <h3 >{v.title}</h3><br></br>
                    <h2 >Price: {v.price}</h2><br></br>
                    <button>View More</button>
                </div>
            ))}

        </div>
    )
}

export default Eff1