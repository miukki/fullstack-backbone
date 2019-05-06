import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import WithLayout from '../components/WithLayout'

const ProjectLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/project?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => {
  const projects = [{title: 'Melody project', id: 0}, {title: 'Nextjs project', id: 1}, {title: 'Deploy apps with Zeit', id: 2}];
  return (<>
    <p>Projects</p>
    <ul>
      {projects.map((i,index) => <ProjectLink id={i.id} key={index} title={i.title} />)}
      
    </ul>
  </>
  )
}
  
export default WithLayout(Index)