import './Form2.css'

function Form2 () {
    return(
        <div className='div-forms'>
            <form className="form2">
                <h1 className='h1-title2'>Add data by filling in the fields</h1>

                <h4 className='h4-edits'>Extension</h4>
                <input className="input-edit" type="text" />

                <h4 className="h4-edits">Count</h4>
                <input className="input-editNum" type="number" />

                <h4 className="h4-edits">Filesize</h4>
                <input className="input-editNum" type="number" />

                <div className='div-btns'>
                <button className='btn-cancel'>Cancel</button>
                <button className='btn-add'>Add</button>
            </div>
            
    </form>
    </div>
    )
}

export default Form2