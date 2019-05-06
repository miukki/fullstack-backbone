import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import WithLayout from '../components/WithLayout'
import fetch from 'isomorphic-unfetch'

const ProjectLink = (item) => {
  return (
    <li>
      <Link as={`/projects/${item.id}`} href={`/project?id=${item.id}`}>
        <a>{item.name}</a>
      </Link>
    </li>
  ) 
}


const Index = (props) => {
  // const projects = [{title: 'Melody project', id: 0}, {title: 'Nextjs project', id: 1}, {title: 'Deploy apps with Zeit', id: 2}];
  return (<>

    <Layout>

      <p>Projects</p>
      <ul>
        {/* {projects.map((i,index) => <ProjectLink id={i.id} key={index} title={i.title} />)} */}
        {props.projects.map(
          (item, index) => <ProjectLink key={index} {...item} />        ) }      
      </ul> 


    </Layout>

  </>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  // console.log('data!', data)

  console.log(`Show data fetched. Count: ${data.length}, ${data}`)

  return {
    projects: data.map(entry => entry.show)
  }
}
  
export default Index