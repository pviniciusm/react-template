import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { increment, reset } from '../../store/modules/counter/slice';

export const Counter = () => {
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(increment());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <React.Fragment>
            <h3>Counter</h3>
            <p>{counter}</p>
            <br />
            <Button onClick={handleAdd}>Add counter</Button>
            <Button onClick={handleReset}>Reset</Button>
        </React.Fragment>
    );
};
