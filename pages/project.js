import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Content = ({item}) => {
  const {summary='', name, image={}} = item;
  return (
    <div>
      <p>{summary.replace(/<[/]?p>/g, '')}</p>
      <h1>{name}</h1>
      <img src={image.medium} />
    </div>
  )
}

const Project = props => (
  <Layout>
    <Content {...props}/>
  </Layout>
)

Project.getInitialProps = async function(context) {
  console.log('context.query!', context.query)
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const item = await res.json()

  return {item}
}

export default Project
