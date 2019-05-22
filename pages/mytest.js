import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = withRouter(props => {
  return <h1>{props.router.query.title}</h1>
})

const Page = withRouter(props => (
  <Layout>
    <Content />
  </Layout>
))

export default Page
