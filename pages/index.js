import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import WithLayout from '../components/WithLayout'

const ProjectLink = ({title}) => (
  <li>
    <Link href={`/project?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Index = () => {
  const projects = ['Melody project', 'Nextjs project', 'Deploy apps with Zeit'];
  return (<>
    <p>Projects</p>
    <ul>
      {projects.map((i,index) => <ProjectLink key={index} title={i} />)}
      
    </ul>
  </>
  )
}
  
export default WithLayout(Index)