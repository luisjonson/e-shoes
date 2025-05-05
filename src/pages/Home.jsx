import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components';

function Home() {
  const HomeStaled = styled.div`
     max-width: 1300px;
  `
  
  return (
    <div>
        <Card/>
    </div>
  )
}

export default Home