import Header from './Header'
import CssBaseline from '@material-ui/core/CssBaseline';

const layoutStyle = {
}

const Layout = props => (
  <div style={layoutStyle}>
    <CssBaseline />
    <Header />
    {props.children}
  </div>
)

export default Layout
