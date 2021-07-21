import { Box, Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardProduct } from '../CardProduct';
import { Container } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiDetails, apiList } from '../../Services/api'
import { useParams } from 'react-router-dom';

type GamesProps = {
    name: string;
    background_image: string;
    key: string;
    id: number;
}

export function ListProducts() {
    const [listProduct, setListProduct] = useState<GamesProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function getList() {
        const request = await apiList.get('');
        const response = request.data.results
        setListProduct(response)

        console.log(listProduct)
        if (listProduct.length < 1) {
            setLoading(false)
        }

    }

    console.log(listProduct)

    useEffect(() => {
        getList();
    }, [])

    return (
        <Container>
            <Box flex={1} py={2}>
                <Typography variant="h3" align="center">Lista de games</Typography>
            </Box>
            <Grid container spacing={3}>
                {loading &&
                    <Grid item xs={12} className="loading">
                        <CircularProgress size="5rem" />
                    </Grid>}
                {listProduct.map((games, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <CardProduct id={games.id} title={games.name} img={games.background_image} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}