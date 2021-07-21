import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

type CardProps = {
    title: string,
    img: string,
    id?: number,
}

export function CardProduct(props: CardProps) {

    return (
        <CardActionArea
            component={Link}
            to={`/game/${props.id}`}
        >
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.img}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography align="center" variant="h5" component="h2">
                    {props.title}
                </Typography>
            </CardContent>
        </CardActionArea>
    )
}