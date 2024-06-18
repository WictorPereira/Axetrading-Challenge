import './Table.css'
import Results from'./Results.jsx'

function Table() {

    return(
        <div className="container-table">
            <ul className="ul-table">
                <li>Extension</li>
                <li>Count</li>
                <li>Filesize</li>
                <li>Action</li>
            </ul>
            <p className="p-table">Add new data by importing it from a file or filling in the fields above!</p>
            
            <Results/>
           
        </div>
    )
}

export default Table