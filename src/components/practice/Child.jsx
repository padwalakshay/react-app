import { memo } from 'react';
export default memo(function Child (props) {
    console.log('i m from child')
    return (
        <>I m from child
        the props is coming from parent-{props.count}
        </>
    )
})