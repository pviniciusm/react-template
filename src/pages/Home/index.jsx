import React from 'react';
import { Divider, Grid } from '@mui/material';

import { Counter } from '../../components/Counter';

export const Home = () => {
    return (
        <React.Fragment>
            <Grid container direction={'column'} spacing={3}>
                <Grid item>
                    <h1>Home-page</h1>
                    <p>Este é um template React</p>
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <Counter />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
