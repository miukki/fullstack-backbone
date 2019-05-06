import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'


const Content = withRouter((props => 
  <div>
  <h1>{props.router.query.title}</h1>
  <p>Project description</p>
</div>

))

const Page = withRouter(props => (
  <Layout>
    <Content />
  </Layout>
))

export default Page