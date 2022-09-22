// KYLE ONLY

import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//"name", "description", "price", "image_path"
function PizzaItem({pizza}) {
    let [pizzaToggle, setPizzaToggle] = useState('Add')
    const dispatch = useDispatch()
    // const pizza = {
    //     id: 1,
    //     name: 'Onomatopizza',
    //     description: "We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you'll SMACK your lips.",
    //     price: 14.99,
    //     image_path: 'images/pizza_photo.png'

    // }

    const addOrRemove = () => {
        if (pizzaToggle === 'Add'){
            setPizzaToggle('Remove')
        }
        else {
            setPizzaToggle('Add')
        }
    }

    const handleClick = () => {
        console.log('pizza toggle', pizzaToggle)
        let action =''
        if (pizzaToggle === 'Add'){
            action = {
                type: 'ADD_PIZZA',
                payload: {
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                    quantity: 1
                }}}
        else {
            action = {
                type: 'REM_PIZZA',
                payload: {
                    price: pizza.price

                }
            }
        }
        dispatch(action)
        addOrRemove()
    }

    

    return (
        <Card sx={{ display: 'inline-block', maxWidth: 345, m: 3 }} key={pizza.id}>
            <CardMedia
                component="img"
                height="140"
                image={pizza.image_path}
                alt={pizza.name}
            />
            <CardContent>
                <Box component="div" sx={{textOverflow: 'ellipsis', overflow: 'auto', whiteSpace: 'nowrap'}}>
                    <Typography gutterBottom variant="h5" component="div">
                    {pizza.name} : {pizza.price}
                    </Typography>
                </Box>
                <Box component="div" sx={{ minHeight: 100}}>
                    <Typography variant="body2" color="text.secondary">
                    {pizza.description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>{pizzaToggle} Pizza</Button>
                {/* <Button size="small">Learn More</Button> */}
            </CardActions>
        </Card>
    )
}

export default PizzaItem
