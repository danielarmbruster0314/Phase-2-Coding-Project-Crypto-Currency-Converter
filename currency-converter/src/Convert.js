function Convert(){
    return(
        <div className="Convert">
            <label htmlFor="current">Current Currency :</label>
            <input type="number" id="current" name="current" dir="rtl" placeholder="0.00"></input>
            <label htmlFor="converted">Converted Currency :</label>
            <input type="number" id="converted" name="converted" dir="rtl" placeholder="0.00"></input>
        </div>
    )
}

export default Convert