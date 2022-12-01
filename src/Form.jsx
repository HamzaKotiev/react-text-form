import React, { useState } from 'react'
import './App.css';

const Form = (props) => {

    const [text, setText] = useState('');
    const [blur, setBlur] = useState(false);
    const [sended, setSended] = useState(false)

    const hendleSetText = (e) => {
        setText(e.target.value)
        setSended(false) 
    }

    const hendleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            console.log(text.trim());
            setText('')  
            setBlur(false)  
            setSended(true)      //Сброс текста из инпута 
        }
       
    }

    const isError = () => {
        
    }
  
    const hendleSerBlur = () => {
        setBlur(true)
        setSended(false)
    }
    return (
        <>
        <form onSubmit={hendleSubmit}>
            <input
            className={!text && blur ? 'inputer is-error' : 'inputer'} 
            type="text"
            onBlur={hendleSerBlur} 
            value={text} 
            onChange={hendleSetText} 
            />
            <button disabled={!text} className='btn'><p className='btntext'>click</p></button>
        </form>
        {!text && blur ? <div>пустой инпут</div>   : null }
        {sended ? <div>отправлено</div> : null}
        </>
    )
}

export default Form