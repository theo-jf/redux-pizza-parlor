// KYLE ONLY
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//"name", "description", "price", "image_path"
function PizzaItem({pizza}) {
    let pizzaToggle = 'Add'
    const dispatch = useDispatch()
    const pizza = {}

    const addOrRemove = () => {
        if (pizzaToggle === 'Add'){
            pizzaToggle = 'Remove'
        }
        else {
            pizzaToggle = 'Add'
        }
        return pizzaToggle
    }

    const handleClick = (event) => {
        event.preventDefault(); 
        if (pizzaToggle === 'Add'){
            const action = {
                type: 'ADD_PIZZA',
                payload: {
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                    quantity: 1
                }}}
        else {
            const action = {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pizza.image_path}
        alt={pizza.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name} : {pizza.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pizza.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick(event)}>{pizzaToggle} Pizza</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    )
}

export default PizzaItem



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
