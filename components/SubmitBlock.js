import Link from 'next/link'
import styled from 'styled-components'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Root = styled.div`
  && {
  }
`




const SubmitBLock = () => (
  <Root>

      <Grid
        
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={8} sm={6} md={4}>

          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              BE ONE OF THE FIRST TO EXPERIENCE
          </Typography>
          <Typography  align="center" paragraph>
            the future of fashion
          </Typography>
          <Typography  align="center" paragraph>
            Our online marketplace is like nothing you’ve ever shopped before. It’s an expanding digital wardrobe that allows you buy, sell, lease and rent, all in one place.  Even Co-buy — a market-first feature coming soon that will allow you to make purchases together, making fashion more affordable and sustainable than ever.
          </Typography>

          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              SUBMIT
            </Button>

          </form>

        </Grid>
      </Grid>


  </Root>
)

export default SubmitBLock
