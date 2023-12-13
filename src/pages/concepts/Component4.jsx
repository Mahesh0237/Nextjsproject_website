import React, { useContext } from 'react';
import { MyContext, MyContext2 } from './Component1';

function MyComponent() {
    const contextData = useContext(MyContext);
    const MyContesxt2 = useContext(MyContext2);
    return (
        <div>{contextData.username} {contextData.password} {MyContesxt2}</div>
    );
}
export default MyComponent