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
            <Results/>
           
        </div>
    )
}

export default Table