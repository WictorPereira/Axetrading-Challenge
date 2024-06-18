import './Table.css'

function Results() {
  
    return (
        <ul className='ul-results'>
            <li className='li-results'>Nome do arquivo: </li>
            <li className='li-results'>Última modificação:</li>
            <li className='li-results'>Tamanho do arquivo:</li>
            <li className='li-results'>
            <button className='btn-edit'>Edit</button> 
            <button className='btn-delete'>Delete</button>
        </li>
    </ul>
    )
  }

  export default Results