import { useState } from "react";

function App() {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <h1>Hello World</h1>}
        </>
    );
}
export default App;