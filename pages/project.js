import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Content = ({item}) => {
  const {summary='', name, image={}} = item;
  console.log('summary', summary)
  return (
    <>
      <h1>{name}</h1>
      <img src={image.medium} />

        <div className="markdown">

          <Markdown
          source={`
            This is our blog post.
            Yes. We can have a [link](/link).
            And we can have a title as well.
            ### This is a title
            And here's the content.
        `}
        />

        {summary.replace(/<[/]?p>/g, '')}

        </div>

        <style jsx global>{`
          .markdown h3 {
            text-transform: uppercase;
          }
        `}</style>
        
    </>
  )
}

const Project = props => (
  <Layout>
    <Content {...props}/>
    
  </Layout>
)

Project.getInitialProps = async function({query}) {

//   pathname - path section of URL
// query - query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shows in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering

  console.log('query!', query)
  const { id } = query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const item = await res.json()

  return {item}
}

export default Project
