import React from 'react';
import styled from 'styled-components/native';
import JmButton from '../components/JmButton';

const Container=styled.View`
    align-items: center;
    background-color: #ffffff;
    flex:1;
`;

const Container1=styled.View`
    background-color:#5B8F89;
    align-items:center;
    width: 370px;
    height: 200px;
    margin-top: 200px;
`;

const StyledText=styled.Text`
    font-size: 20px;
    margin: 10px;
    color: #ffffff;
    
`;

const recommend001=({navigation})=>{
    return (
        <Container>
            <Container1>
                <StyledText>빅데이터가 추천해주는 국내 여행지</StyledText>
            </Container1>
            <JmButton title='시작하기' onPress={()=>navigation.navigate('recommend002')} />
        </Container>
    );
};

export default recommend001;