import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
    width: 80%;
    min-height: 60vh;
    background: #fff;
    margin: 20px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const Image = styled('img')({
    width: '30%'
});


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/1200/1200/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;