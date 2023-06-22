import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpper = () => {
        let upperCased = text.toUpperCase();
        setText(upperCased);
        props.showAlert(' converted to uppercase', "success")
    }
    const handleClear =() => {
        setText('')
        props.showAlert(' ClipBoard has been Cleared',"success")
    }
    const handleLower = () => {
        let lowerCased = text.toLowerCase();
        setText(lowerCased);
        props.showAlert(' converted to lowercase', "success")


    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);//javascript redux function
        setText(newText.join(" "));
        props.showAlert(' Extra space has been removed', "success")

    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Below</label>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? 'lightgray' : 'white'}} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpper}>convert to UPPERCASE</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLower}>convert to lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>remove extra space</button>
            </div>

            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words,{text.length} charcters Typed</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text : 'Enter Something in text box above to preview'}</p>
            </div>
        </>
    )
}

export default TextForm;