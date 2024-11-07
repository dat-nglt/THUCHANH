
import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

export default function ProductCard(props) {
  const theme = useTheme()
  return (
    <Card sx={{ maxWidth: '80%', margin: '20px auto', boxShadow: theme.boxShadow.hover }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image='https://i0.wp.com/www.gktoday.in/wp-content/uploads/2016/08/packaging.png?w=1140&ssl=1'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color='primary'>
          {props.product[0]?.ten}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {props.product[0]?.tennhom}
        </Typography>
        <Typography gutterBottom variant="subtitle2" color='secondary'>
          {props.product[0]?.gia}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.product[0]?.mota}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
