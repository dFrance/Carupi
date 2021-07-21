import { Avatar, Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiDetails } from "../../Services/api";
import { Container } from "./styles";

type GamePageParams = {
    id: string;
}

type ProductProps = {
    background_image: string;
    name: string;
    description_raw: string;
    developers: [{
        name: string;
        image_background: string;
    }];
    genres: [{
        name: string;
    }];
    platforms: [{
        platform: {
            name: string;
        }
    }];
};
// genres?: object;
// platforms?: object;

type DeveloperProps = {
    name: Array<string>;
    genres: Array<string>;
    platforms: Array<string>;
}

export function GameDetails() {
    const [product, setProduct] = useState<ProductProps>({
        name: '', background_image: '', description_raw: '', developers: [{ name: '', image_background: '' }], platforms: [{ platform: { name: '' } }], genres: [{ name: '' }]
    });
    const params = useParams<GamePageParams>();
    const [loading, setLoading] = useState(true);
    const gameId = params.id;

    async function getDetails() {
        const request = await apiDetails.get(`${gameId}?key=97049885768547438903c8c37654f064`);
        const response = request.data
        setProduct(response)

    }

    useEffect(() => {
        getDetails()
    }, [])

    const developers = product.developers;
    const platforms = product.platforms;
    const genres = product.genres;

    console.log(platforms)



    return (
        <>
            <Grid container>
                <Container>
                    {!product.background_image ?
                        <Box className="loading">
                            <CircularProgress size="5rem" />
                        </Box>
                        :
                        <>
                            <Grid item xs={12} sm={6} className="img">
                                <img src={product.background_image} alt={`Foto do jogo ${product.name}`} />
                            </Grid>
                            <Grid item xs={12} sm={6} className="content">
                                <Typography variant="h3">
                                    {product.name}
                                </Typography>
                                <Box py={2}>
                                    <Typography variant="h6" >
                                        Desenvolvedores:
                                    </Typography>
                                    <Typography align="justify" className="description">
                                        {developers.map(developer => {
                                            return (
                                                <Box display="flex" pb={1} alignItems="center" style={{ gap: '1rem' }}>
                                                    <Avatar alt={developer.name} src={developer.image_background} />
                                                    {developer.name}
                                                </Box>
                                            )
                                        })}
                                    </Typography>
                                </Box>
                                <Box py={2}>
                                    <Typography variant="h6">
                                        Categorias:
                                    </Typography>
                                    <Box className="infos-template">
                                        {genres.map(genre => {
                                            return (
                                                <Typography>
                                                    {genre.name}
                                                </Typography>
                                            )
                                        })}
                                    </Box>
                                </Box>
                                <Box py={2}>
                                    <Typography variant="h6">
                                        Plataformas:
                                    </Typography>
                                    <Box className="infos-template">
                                        {platforms.map(platform => {
                                            return (
                                                <Typography>
                                                    {platform.platform.name}
                                                </Typography>
                                            )
                                        })}
                                    </Box>
                                </Box>
                                <Typography variant="h6">
                                    Descrição do jogo:
                                </Typography>
                                <Typography align="justify" className="description">
                                    {product.description_raw}
                                </Typography>
                            </Grid>
                        </>
                    }
                </Container>
            </Grid>
        </>
    )
}