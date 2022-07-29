import React, {useState} from 'react';

function App () {
    const [amount,setAmount] = useState(0);
    const [active,setActive] = useState(true);

    const onChange = (event) =>{
        console.log(event);

        setAmount(event.target.value);    
      };
    const reset = () => {
        setAmount(0);
    };
    const changeActive = () => {
      reset();
      setActive((prevState) => {
        return !prevState;
      });
    };

    return (
        <div>
            <div>time Converter</div>
            <div>
                minutes{" "}
                <input
                    placeholder="Minutes"
                    Value={active ? amount : amount * 60}
                    type="number"
                    onChange={onChange}
                    disabled={!active}
                />
                <div>
                    Hours{" "}
                    <input
                    type="number"
                    placeholder="Hours"
                    Value={active ? Math.floor(amount/60) : amount}
                    disabled={active}
                    onChange={onChange}
                />
                </div>
                <button onClick={reset}>reset</button>
                <button onClick={changeActive}>active toggle</button>
            </div>
            <hr />
        </div>
    );
};

export default App;