import React, {useState, useEffect} from 'react';

function IntervalHookCounter(props) {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
        <p>{this.state.count }</p>
        </div>
    );
}

export default IntervalHookCounter;