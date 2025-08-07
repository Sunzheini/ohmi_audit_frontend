import './App.css';
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


function App() {
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
            </>
    );
}

export default App;