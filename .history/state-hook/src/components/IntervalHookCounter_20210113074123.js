import React, {useState} from 'react';

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
            
        </div>
    );
}

export default IntervalHookCounter;