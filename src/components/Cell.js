import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
display: grid;
grid-template-columns: 60px auto;
grid-gap: 25px;
/* justify-content: center; */
align-items: center;
`;

const CellImage = styled.div`
width: 60px;
height: 60px;
background:#254380;
border-radius: 10px;
background-image: url(${props => props.image});
background-size: 60px;
box-shadow: 0 20px 40px rgba(0,0,0, 0.25);
`;

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 30px 0;
`;

const Cell = ({ image, title }) => {
    return (
        <CellGroup>
            <CellImage image={image}></CellImage>
            <CellTitle> {title} </CellTitle>
        </CellGroup>
    );
}

export default Cell;
