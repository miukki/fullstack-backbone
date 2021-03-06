import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import WithLayout from '../components/WithLayout'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import styled from 'styled-components';


const Title = styled.h1`
  color: purple;
`;

const ProjectLink = item => {
  return (
    <li>
      <Link as={`/project/${item.id}`} href={`/project?id=${item.id}`}>
        <a>{item.name}</a>
      </Link>
      <style jsx>{`

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  )
}

const Index = ({projects}) => {
  // const projects = [{title: 'Melody project', id: 0}, {title: 'Nextjs project', id: 1}, {title: 'Deploy apps with Zeit', id: 2}];
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>    
      <Layout>
        <Title>Projects</Title>
        <ul>
          {/* {projects.map((i,index) => <ProjectLink id={i.id} key={index} title={i.title} />)} */}
          {projects.map((item, index) => (
            <ProjectLink key={index} {...item} />
          ))}
        </ul>
        <style jsx>{`
        ul {
          padding: 0;
        }

      `}</style>

      </Layout>
      
    </>
  )}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  // console.log('data!', data)

  console.log(`Show data fetched. Count: ${data.length}, ${data}`)

  return {
    projects: data.map(entry => entry.show),
  }
}

export default Index





// function * generatorFunction() { 
//   console.log('This will be executed first.');
//   yield 'Hello, ';  
//   console.log('I will be printed after the pause');  
//   yield 'World!';
// }
// const generatorObject = generatorFunction(); 
// console.log(generatorObject.next().value); 
// console.log(generatorObject.next().value); 
// console.log(generatorObject.next().value); 


// function *  generatorFunc() {
//   yield 'a';
//   return 'b'; 
//   yield 'a';  
// }

// const gObject = generatorFunction(); 

// console.log('!',gObject.next().value, gObject.next().value)


// function * iterableObj() {
//   yield 'This';
//   yield 'is';
//   yield 'iterable.'
// }
// for (const val of iterableObj()) {
//   console.log(val);
// }
// // This
// // is 
// // iterable.


// function fetchJson(url) {
//   return fetch(url)
//   .then(request => request.text())
//   .then(text => {
//       return JSON.parse(text);
//   })
//   .catch(error => {
//       console.log(`ERROR: ${error.stack}`);
//   });
// }

// fetchJson()