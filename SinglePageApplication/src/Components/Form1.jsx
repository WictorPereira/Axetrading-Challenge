import './Form1.css'

function Form1 () {
  return(
    <div className='div-forms'>
      <form className="form">
          <h1 className='h1-title'>Add by importing JSON file</h1>
          <h4 className='h4-choose'>Choose a file</h4>
          <input 
            className='file-input' 
            type="file" 
            accept='.json'
          />
          <button className='btn-import'>Import</button>
    </form>
    </div>
  )
}

export default Form1