import Link from 'next/link'
import styled from 'styled-components'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Root = styled.div`
  && {
    background-color: #1f231f;
    background-position: -200px 200%;
    background-repeat: no-repeat;
    background-size: auto auto;
    background-image: url('/static/images/footer.svg');
    min-height: 510px;
  }
`




const Footer = () => (
  <Root>

      <Grid
        
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={8} sm={5} md={5}>

          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Stay up to date with everything Cirkle and be the first to know when we officially launch.
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

export default Footer
