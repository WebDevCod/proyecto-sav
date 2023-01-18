import Layout from '../layout/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTumblr } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <Layout>
        <div className='social-media-icons pb-5 d-flex justify-content-center'>
          <a href='https://instagram.com' target='_blank' rel='noreferrer' className='pe-5'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://tumblr.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTumblr} />
          </a>
        </div>
        </Layout>
    )
}


