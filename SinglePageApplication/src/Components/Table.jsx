import './Table.css'

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
            <ul className='ul-results'>
                <li className='li-results'>java</li>
                <li className='li-results'>1000</li>
                <li className='li-results'>5000</li>
                <li className='li-results'>
                    <button className='btn-edit'>Edit</button> 
                    <button className='btn-delete'>Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default Table