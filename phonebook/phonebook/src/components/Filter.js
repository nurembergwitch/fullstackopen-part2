const Filter = ({ handleLookup, query }) => {
    return (
        <div>
            <label>search</label>
            <input onChange={handleLookup} value={query} />
        </div>
    )
}
export default Filter