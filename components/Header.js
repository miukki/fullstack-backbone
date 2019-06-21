import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'


const linkStyle = {
  marginRight: 15,
}
const logoStyle = {
  width: 60.2,
  height: 60.2,
}

const buttonStyle = {
  border: 'none',
  backgroundColor: 'none'
}


const mainTableStyle = {
 height: 700,
}
 
const TextGrid = styled(Grid)`
&& {
  height: 60%;
}
`
const Root = styled(Grid)`
  && {
    background-position: 150% 50%;
    background-repeat: no-repeat;
    background-size:  75% auto;
    background-image: url('/static/images/bg.svg');
    background-color: #EFEFEF;
  }
`


const bgImage = () => {
  return <img src="/static/images/bg.png" alt="Cirlke" />;
  }

const IconLogo = ({color}) => {

  return (
    <IconButton style={buttonStyle} aria-label="Cirkle">
    
      <SvgIcon  style={logoStyle} version="1.1" xmlns="http://www.w3.org/2000/svg" width="892" height="1024" viewBox="0 0 892 1024" >
    
        <g id="icomoon-ignore">
        </g>
        <path fill="#000" d="M810.375 803.151c-162.845 162.845-426.92 162.845-589.765 0-162.86-162.86-162.86-426.92 0-589.78l-69.632-69.617c-201.304 201.318-201.304 527.711 0 729.015 201.318 201.318 527.711 201.318 729.015 0l-69.617-69.617z"></path>
        <path fill="#000" d="M793.811 101.023l-11.249 15.024 47.704 35.752-8.397 11.205-47.704-35.738-12.361 16.501 49.781 37.288-8.47 11.293-62.713-47.002 48.933-65.287 62.098 46.519-8.455 11.293z"></path>
        <path fill="#000" d="M621.868 9.952l-42.628 26.346 35.387 54.96-20.773-2.253-28.584-44.149-25.161 15.945-2.399 22.089-16.091-1.755 8.85-81.13 16.062 1.755-4.432 40.697 56.159-35.079z"></path>
        <path fill="#000" d="M663.217 93.566l54.433 21.753-5.383 13.517-69.456-27.765 30.31-75.776 15.009 5.983z"></path>
        <path fill="#000" d="M444.853 43.223l-33.631 5.91-3.92-22.235 33.763-5.91c5.53-0.951 9.801-0.483 12.727 1.448 2.794 1.799 3.803 4.608 4.169 6.656 0.746 4.286 0.044 11.82-13.107 14.131zM474.33 26.327c-1.156-6.524-4.432-12.054-9.201-15.55-6.085-4.476-14.365-5.822-24.576-4.023l-51.61 9.040 14.102 80.428 15.945-2.823-5.369-30.457 29.55-5.193 26.887 26.683 19.324-3.394-28.877-28.701c12.39-6.246 15.36-17.291 13.824-26.010z"></path>
        <path fill="#000" d="M332.275 35.508l30.749 75.6-14.98 6.085-30.749-75.6z"></path>
        <path fill="#000" d="M299.339 109.629c4.813 19.017-3.408 36.542-23.757 50.673-11.337 7.885-23.011 11.995-33.938 11.995-1.287 0-2.531-0.044-3.789-0.161-12.083-1.053-22.352-7.241-29.711-17.818-5.091-7.314-7.548-15.214-7.548-23.201 0-15.272 9.040-30.72 26.068-42.525 20.699-14.395 41.443-15.199 56.876-2.209l2.165 1.829-12.771 11.059-1.565-1.258c-10.167-8.104-22.967-7.241-37.040 2.545-17.964 12.478-22.747 29.433-12.478 44.208 9.977 14.336 28.467 15.77 46.065 3.569 13.561-9.45 19.032-20.436 16.325-32.724l-0.439-1.872 14.833-6.949 0.702 2.838z"></path>


      </SvgIcon>
    </IconButton>
  )
};



const Header = () => (
  <Root>

      <Grid container style={mainTableStyle}>
        <Grid item xs={12} sm={6} >
        
            <IconLogo />


            <TextGrid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              
            >

              <Grid item >

                  A<br/>
                  PEER–TO–PEER<br/>
                  FASHION<br/>
                  MARKETPLACE

              </Grid>
              <Grid item>
                  Enabling fashion-savvy shoppers<br/>
                  to monetise their wardrobes

              </Grid>
              <Grid item>
                  FIND OUT MORE

              </Grid>
            </TextGrid>
        </Grid>

        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
      
{/* 
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/contacts">
        <a style={linkStyle}>Contacts</a>
      </Link>
    </div> */}

  </Root>
)

export default Header
