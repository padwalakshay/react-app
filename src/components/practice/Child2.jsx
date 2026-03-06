import { memo } from 'react';
import { useContext } from 'react';
import { context } from './Parent';
export default memo(function Child (props) {
    let  {data , updateData} = useContext(context);
    const sendDataToParent = () => {
    const dataToSend = 'Hello from Child!';
    updateData(dataToSend); // Call the function provided by the parent
    };
    
    return (
        <>I m from child
        the props is coming from parent-{props.count}
        <button onClick={sendDataToParent}>
        Send Data to Parent
      </button>
        </>
    )
})