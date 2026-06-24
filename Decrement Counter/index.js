import { useState } from "react";

function App() {
    const [count, setCount] = useState(10);

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
}
export default App;