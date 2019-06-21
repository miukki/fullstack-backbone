import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Hidden from '@material-ui/core/Hidden';

const Root = styled.div`
  && {
    background-color: #EFEFEF;
 
  }
`
const AvatarStyled = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
    img {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
`
const CardStyled = styled(Card)`
&& {
  background: none;
  border: none;
  box-shadow:none;
  display: flex;
}
`
const CardContentStyled = styled(CardContent)`
&& {
  padding: 0 30px; 
}
`

const members = [
  {
    title: 'Julia Sun',
    src: '/static/images/julia.jpg',
    description:
      'Julia is a passionate founder with a wealth of experience in the finance industry and a determination to introduce new ways of consumption in the fashion world. Research shows that the average consumer sends over 30kgs of clothing to landfill each year. Julia and her co-founder, Anja, are working to reduce that number, while also transforming traditional buying methods and empowering women through clever technology.',
  },
  {
    title: 'Anja Ishmukhametova',
    src: '/static/images/anja.jpg',
    description:
      'Anja is a self-confessed tech-head with a wealth of experience in the software industry and a determination to use technology to affect positive and sustainable change throughout the world. Using the concept of ‘smart and sustainable consumption’, she hopes to extend the life of goods, reduce the level of textiles in landfill, and give consumers the chance to own less and access more.',
  },
];


const WhyCirkle = () => (
  <Root>

      <Typography align="center" gutterBottom variant="h5" component="h5">
        MEET THE TEAM
      </Typography>

      <Grid
        container
        direction="row"
        justify="center"
      >

        <Grid item xs={10} sm={9} >

          <Grid container spacing={4} >
              {members.map(member => (
                <Grid item key={member.title} xs={12} md={6}>
                    <CardStyled>
                      
                      <Hidden xsDown>
                        <AvatarStyled alt={member.title} src={member.src}  />
                      </Hidden>
                      
                      <CardContentStyled>
                        <Typography component="h2" variant="h5">
                          {member.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {member.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          LinkedIn
                        </Typography>
                      </CardContentStyled>

                    </CardStyled>

                </Grid>
              ))}
            </Grid>
                      
        </Grid>
      </Grid>




  </Root>
)

export default WhyCirkle
