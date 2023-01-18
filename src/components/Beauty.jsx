import Layout from '../layout/Layout';
import Img1 from '../img/beauty/01.jpg';
import Img2 from '../img/beauty/02.jpg';
import Img3 from '../img/beauty/03.jpg';
import Img4 from '../img/beauty/04.jpg';
import '../css/gallery.css';
import { useState } from 'react';

export default function Beauty() {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <Layout>
                <div className={model ? 'model open' : 'model'}>
                    <img src={tempimgSrc} alt='' />
                    <i className="bi bi-x-circle close" onClick={() => setModel(false)}></i>
                </div>

                <div className='gallery'>
                    {data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} alt={item.img} />
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </>
    );
};