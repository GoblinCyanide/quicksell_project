import React, { useState } from 'react'
import Navbar from '../nBar/NBar';
import Grid from '../grid/Carousel';
import GridPriority from '../grid/CarouselPriority';
import GridUser from '../grid/CarouselUser';
import './style.css';

const Home = () => {
  const [order, setOrder] = useState('priority');
  const [group, setGroup] = useState('status');

  return (
    <div className='main'>
      <Navbar setGroup={setGroup} setOrder={setOrder} />
      {group === 'priority' && <GridPriority order={order} />}
      {group === 'user' && <GridUser order={order} />}
      {group === 'status' && <Grid order={order} />}
    </div>
  )
}

export default Home;