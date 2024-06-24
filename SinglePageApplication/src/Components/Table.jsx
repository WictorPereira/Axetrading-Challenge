import './Table.css'
import Results from'./Results.jsx'

function Table({ onEdit }) {

    return(
        <div className="container-table">
            <ul className="ul-table">
                <li>Extension</li>
                <li>Count</li>
                <li>Filesize</li>
                <li>Action</li>
            </ul>           
            <Results onEdit={onEdit}/>
           
        </div>
    )
}

export default Table