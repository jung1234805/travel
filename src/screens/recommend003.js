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
    {id1:[0], context:'여행은 휴식이지'},
    {id1:[1], context:'여행은 경험이지'},
];

const recommend003=({navigation,route})=>{
    ID=route.params.ID
    return (
        <Container>
            <StyledText>   이번 여행의 테마는?</StyledText>
            <Container1>
                <StyledText></StyledText>
                {items.map(({id1,context})=>(
                    <JmButton
                        key={id1}
                        title={context}
                        onPress={()=>navigation.navigate('recommend004',{ID:ID.concat(id1)})}
                        />
                ))}
            </Container1>
        </Container>
    );
};

export default recommend003;