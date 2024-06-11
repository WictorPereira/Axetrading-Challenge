import './Form1.css'

function Form1 () {
  return(
    <form className="form">
        <h1 className='h1-title'>Add by importing JSON file</h1>
        <h4 className='h4-choose'>Choose a file</h4>
        <input 
          className='file-input' 
          type="file" 
          accept='.json'
          />
          <button className='import'>Import</button>

    </form>
  )
}

export default Form1