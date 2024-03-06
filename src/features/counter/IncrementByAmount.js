import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';
import { Grid, Typography, TextField, Button} from '@mui/material';

export default function IncrementByAmount() {
    const [amount, setAmount] = useState('');
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleAmount = (event) => {
        setAmount(event.target.value);
    };

    return (
        <Grid container spacing={2} sx={{ marginX: '0.5%', marginY: '0.5%' }} >
            <Grid item={4}>
                <Typography>Current Value of Counter: {count}</Typography>
            </Grid>
            <Grid item={4}>
                <TextField
                    id="amountIncremented"
                    label="Enter your increment amount"
                    value={amount}
                    onChange={handleAmount}
                />
            </Grid>
            <Grid item={4}>
                <Button
                    variant="contained"
                    onClick={() => dispatch(incrementByAmount(parseInt(amount, 10)))}
                >
                    Increment By Amount
                </Button>
            </Grid>
        </Grid>
    );
}