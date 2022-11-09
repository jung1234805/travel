import React, { useState,useRef } from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Input } from '../components';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View, TouchableOpacity,StyleSheet} from 'react-native';


const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const MainPage = ({navigation}) => {

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <Container>
            <Button title = "맞춤형 여행 추천" 
            onPress = {() => navigation.navigate('recommend001')} />
            <Button title = "준비물 챙기기" 
            onPress = {() => navigation.navigate('Materials')} />
            <Button title = "마이 페이지" 
            onPress = {() => navigation.navigate('MyPage')} />
              
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default MainPage