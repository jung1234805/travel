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
    {id2:[0], context:'마음 편해지는 자연 관광지'},
    {id2:[1], context:'배움을 얻는 역사 관광지'},
];

const recommend004=({navigation, route})=>{
    ID=route.params.ID
    return (
        <Container>
            <StyledText>여행 중 가고 싶은 관광지는?</StyledText>
            <Container1>
                <StyledText></StyledText>
                {items.map(({id2,context})=>(
                    <JmButton
                        key={id2}
                        title={context}
                        onPress={()=>navigation.navigate('recommend005',{ID:ID.concat(id2)})}
                        />
                ))}
            </Container1>
        </Container>
    );
};

export default recommend004;