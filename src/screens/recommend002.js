import React from 'react';
import styled from 'styled-components/native';
import JmButton from '../components/Button';


const Container=styled.View`
    flex:1;
    background-color: #ffffff;
`;

const Container1=styled.View`
    margin-top:10px;
    width: 100%;
    flex:3;
    background-color:#ffffff;
`;

const StyledText=styled.Text`
    font-size: 18px;
    margin-top: 50px;
    color : #5B8F89;
    font-weight : 600;
    margin-left : 20px;
    
`;

const items=[
    {id:[0], context:'여행은 도시로'},
    {id:[1], context:'여행은 평소에 떠나보지 못한 곳으로'},
];

const recommend002=({navigation})=>{
    return (
        <Container>
            <StyledText>여행 계획을 짜게 된 우리, 여행은 어디로 갈까?</StyledText>
            <Container1>
                <StyledText></StyledText>
                {items.map(({id,context})=>(
                    <JmButton
                        key={id}
                        title={context}
                        onPress={()=>navigation.navigate('recommend003',{ID:id})}
                        />
                ))}
            </Container1>
        </Container>
    );
};

export default recommend002;