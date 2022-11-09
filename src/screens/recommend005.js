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
    {id3:[0], context:'지역의 특색 있는 문화행사'},
    {id3:[1], context:'자연을 활용한 특색 있는 레포츠'},
];

const recommend005=({navigation, route})=>{
    ID=route.params.ID
    return (
        <Container>
            <StyledText>촉박한 시간으로 인해 둘 중 골라야 한다면?</StyledText>
            <Container1>
                <StyledText></StyledText>
                {items.map(({id3,context})=>(
                    <JmButton
                        key={id3}
                        title={context}
                        onPress={()=>navigation.navigate('recommend006',{ID:ID.concat(id3)})}
                        />
                ))}
            </Container1>
        </Container>
    );
};

export default recommend005;