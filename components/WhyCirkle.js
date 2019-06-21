import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const Root = styled.div`
  && {
    background-color: #EFEFEF;
 
  }
`
const GridCustom = styled(Grid)`
  && {
  }
`


const WhyCirkle = () => (
  <Root>

      <Typography align="center" gutterBottom variant="h5" component="h5">
        WHY SHOP WITH CIRKLE?
      </Typography>

      <GridCustom
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={10}
      >

        <Grid item xs={7} sm={6} md={3}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Buy or Sell
          </Typography>
          <Typography align="center">
            Make a purchase from our growing digital catalogue, or sell something from your real-life wardrobe. 
          </Typography>
        </Grid>


        <Grid item xs={7} sm={6} md={3}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Rent or Lease
          </Typography>
          <Typography align="center">
            Save money on things you want by renting them, or make money from things you don’t by leasing them. 
        </Typography>

        </Grid>

        <Grid item xs={7} sm={6} md={3}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Co–Buy
          </Typography>
          <Typography align="center">
            Share the dress. Share the cost. Owning more never cost so little thanks to our new Co-buy feature.
          </Typography>

          <Typography align="center">
            <Button size="small" color="primary">
              COMING SOON
            </Button>
          </Typography>
        </Grid>


        <Grid item xs={7} sm={6} md={3}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            AI Styling + Fit
          </Typography>
          <Typography align="center">
            Our clever tech will learn your size, as well as your style, and help you find more of what you like and less of what you don’t by connecting you with similarly-styled users.
          </Typography>

          <Typography align="center">
            <Button size="small" color="primary">
              COMING SOON
            </Button>
          </Typography>
          </Grid>

      </GridCustom>


  </Root>
)

export default WhyCirkle
