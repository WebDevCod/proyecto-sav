import Layout from '../layout/Layout';

export default function Home() {
  return (
    <Layout>
      <img
        src={require('../img/bg-home.jpg')}
        className='img-fluid'
        alt='Collage'
      />
    </Layout>
  );
}
