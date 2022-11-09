import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container=styled.View`
    background-color: #5B8F89;
    align-items: center;
    justify-content: center;
    padding : 10px;
    margin : 3%;
    border-radius : 4px;
    width : 100%;
    
`;

const Title=styled.Text`
    font-size: 18px;
    color:#ffffff;
    padding: 5px;
   
`;

const JmButton=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Container>
                <Title>{title}</Title>
            </Container>
        </TouchableOpacity>
    );
};

export default JmButton;