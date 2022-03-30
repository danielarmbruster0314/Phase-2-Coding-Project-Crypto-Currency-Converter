function Exchange({ exchange, current, converted }){
    return(
        <div>
            <h1>Exchange Rate</h1>
            <p>$ {Math.floor(exchange)}.00</p>
            <p>{converted} to {current}</p>
        </div>
    )
}

export default Exchange