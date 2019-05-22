<<<<<<< HEAD
import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = withRouter(props => {
  return <h1>{props.router.query.title}</h1>
})
=======
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = withRouter((props => {
  return (
    <h1>{props.router.query.title}</h1>
    )
}

))
>>>>>>> master

const Page = withRouter(props => (
  <Layout>
    <Content />
  </Layout>
))

<<<<<<< HEAD
export default Page
=======
export default Page
>>>>>>> master
