// Commonly used to implement server side rendering for css-in-js libraries
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html>
          <Head>
            <style>{`body { background: rwewr } /* custom! */`}</style>
          </Head>
          <body className="custom_class">
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument