import React from 'react';
import Notebook from "../Notebook/Notebook";

const notebooks = [
    {
        id:1,
        brand: 'Apple',
        model: 'Pro',
        cost:100,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
    },
    {
        id:2,
        brand: 'HP',
        model: '15s',
        cost:150,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
    },
    {
        id:3,
        brand: 'Dell',
        model: 's2000',
        cost:170,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
    },
    {
        id:4,
        brand: 'Lenovo',
        model: 'Legion',
        cost:200,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
    }

]

const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook=> <Notebook notebook={notebook}/>)}
        </div>
    );
};

export default Notebooks;