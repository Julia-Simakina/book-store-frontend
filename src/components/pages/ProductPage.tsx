import React from 'react';
import { useParams } from 'react-router-dom';

// interface IProductPageProps {
//   id: number;
// }

const ProductPage: React.FC = () => {
  const params = useParams();

  console.log(params);

  return (
    <header className='header'>
      <h1 className='header__title'>Product {params.id}</h1>
      <p className='header__subtitle'>Organize your work and life, finally.</p>
    </header>
  );
};

export default ProductPage;
