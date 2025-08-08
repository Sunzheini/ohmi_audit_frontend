import { useState } from 'react';


function TitleElement() {
    return <h1 className="Title">Hello World</h1>;
}


function TextElement({text}) {
    return <p className="Text">{text}</p>;
}


function InputElement({value, onChange}) {
    return <input className="Input" type="text" value={value} onChange={onChange}/>;
}


function ButtonElement({onClick}) {
    return <button className="Button" onClick={onClick}>Click Me!</button>;
}


function ComponentExample() {
    const [text, setText] = useState("This is the initial text.");
    const [inputText, setInputText] = useState("");

    return (
            <>
                <TitleElement/>
                <TextElement text={text}/>
                <InputElement
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}/>
                <ButtonElement onClick={() => {
                    setText(inputText)
                    setInputText("");
                }}/>

                <br/><br/>

                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
            </>
    );
}

export default ComponentExample;