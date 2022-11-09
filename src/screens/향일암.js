import React from 'react';
import { TouchableWithoutFeedback,Keyboard, View, StyleSheet, Image, Linking} from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import JmButton from '../components/JmButton';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

const 향일암=({navigation})=>{
    const styles = StyleSheet.create({
        common: {
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        },
      });
    
      const StyledView=styled.View`
        justify-content: space-around;
        flex-direction: row;
        margin:20px;
        margin-top: 20px;
        padding: 20px;
        border-top-width: 2px;
        border-top-color:#5B8F89;
      `;
    
      const StyledText=styled.Text`
        font-size: 18px;
        margin-top: 2px;
        color : #5B8F89;
        font-weight : 600;
        margin-left : 10px;
        margin-bottom: 30px;
    `;
    
    const LastText=styled.Text`
    font-size: 28px;
    margin-top: 20px;
    color : #5B8F89;
    font-weight : 600;
    margin-left : 20px;
    margin-bottom: 50px;
    `;

        return (
            <KeyboardAwareScrollView 
                contentContainerStyle = {styles.View}
                extraScrollHeight = {20}
            >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style={styles.common}>
                  <Image source ={require('../images/향일암.jpg')}  style = {{width: 350, height:200}}/> 
                  <LastText>향일암</LastText>
                  <StyledView>
                    <TouchableOpacity onPress={()=>Linking.openURL(`tel:+82616444742`)}><AntDesign name="phone" size={24} color="black" /></TouchableOpacity>
                    <StyledText/>
                    <StyledText/>
                    <StyledText/>
                    <StyledText/>
                    <TouchableOpacity onPress={()=>navigation.navigate('map',{lat: 34.59179642399994, lon: 127.80394262574396})}><Feather name="map-pin" size={24} color="black" /></TouchableOpacity>
                  </StyledView>
                  <StyledView>
                    <StyledText>주소 : 전라남도 여수시 돌산읍 향일암로 1 </StyledText>
                  </StyledView>
                  <StyledView>
                    <StyledText onPress={() => Linking.openURL("http://www.hyangiram.or.kr/")}> http://www.hyangiram.or.kr/ </StyledText>
                  </StyledView>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        );
};

export default 향일암;