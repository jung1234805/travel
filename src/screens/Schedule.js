import React, { useState,useRef } from 'react';
import { TouchableWithoutFeedback,Keyboard } from 'react-native';
import styled from 'styled-components/native';
import {Input } from '../components';
import { Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text, View} from 'react-native';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;

const Schedule = ({navigation}) => {

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <Container>
            <View>
              </View>
            <View style={{ flexDirection:"row" }} >
              <Button title = "Home" 
            onPress = {() => navigation.navigate('MainPage')} />
              <Button title = "Schedule" 
            onPress = {() => navigation.navigate('Schedule')} />
             <Button title = "My" 
            onPress = {() => navigation.navigate('MyPage')} />
              </View>
                      </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Schedule