import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const hanldeUppercaseClick = ()=>{
          let newText = text.toUpperCase();
        setText(newText);
        props.alert("Converted to Uppercase!", "success")
    }

    const hanldeClearClick = ()=>{
        let newText = "";
      setText(newText);
      props.alert("Text Box Cleared!", "warning")
  }

    const hanldeLowercaseClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Converted to LowerCase!", "success")
    }

    const hanldeCopyClick = ()=>{
        //let text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.alert("Text Copied to Clipboard!", "success")

    }
    
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1 className='my-3' >{props.heading}</h1>
                <textarea className="form-control"  id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'rgb(175 175 175 / 50%)':'white', color: props.mode ==='dark'?'white':'black'}} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={hanldeUppercaseClick}>UperCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={hanldeLowercaseClick}>LowerCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={hanldeClearClick}>Clear</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={hanldeCopyClick}>Copy</button>
        </div>

        <div className='container' style={{color: props.mode ==='dark'?'white':'black',}}>
            <h2 className='my-3'> Summary of the text: </h2>
            <p> Total characters: <b>{text.length}</b></p>
            <p> Total words: <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b></p>
            <p>Estimated Average time to read text: <b> {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} mins</b></p>
        </div>
        <div  className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
            <h2 className='my-3'> Preview </h2>
            <p>{text.length>0?text:"Nothing to Preview."}</p>
        </div>
        </>
    )
}

Textbox.propTypes ={
    heading : PropTypes.string.isRequired,
}

Textbox.defaultProps = {
    heading: "Enter the text to be analysed:"
}