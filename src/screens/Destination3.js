import React ,{useState, useCallback}from 'react';
import { TouchableWithoutFeedback,Keyboard, Text, View, StyleSheet, Image,ScrollView,Share,RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import JmButton from '../components/JmButton';


const Destination3 = ({navigation}) => {
    const styles = StyleSheet.create({
        common: {
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        },
        scrollView:{
            padding: 30,
            backgroundColor: 'white',
            alignContent:'center',
            alignItems:'center',
        }
      });
    
      const StyledView=styled.View`
        justify-content: space-around;
        flex-direction: row;
        margin:20px;
        margin-top: 20px;
        padding: 30px;
      `;
    
      const StyledText=styled.Text`
        font-size: 18px;
        margin-top: 2px;
        color : #5B8F89;
        font-weight : 600;
        margin-left : 20px;
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
    
    const share = () => {
        Share.share({
            message:`${tip.title}  ${tip.desc} ${tip.image}`,
        });
    }
    
    const [refreshing, setRefreshing] = useState(false);
    
    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, [])
    
    const tip={title:'국내 여행지 추천', desc:'역사가 살아있는 경주에서 다양한 경험까지 도전하라!', image:'../images/경주.jpg'}
    
        return (
            <KeyboardAwareScrollView 
                contentContainerStyle = {styles.View}
                extraScrollHeight = {20}
            >
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style={styles.common}>
                  <StyledText>역사가 살아있는 경주에서 다양한 경험까지 도전하라!</StyledText>
                  <Image source ={require('../images/경주.jpg')}  style = {{width: 300, height:300}}/>
                  <StyledView contentContainerStyle={styles.scrollView}
                               refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <JmButton title='다시 하기' onPress={()=>navigation.popToTop()}></JmButton>
                    <JmButton title='공유 하기' onPress={()=>share()}></JmButton>
                  </StyledView>
                  <ScrollView style={styles.scrollview}>
                    <LastText>추천 여행지</LastText>
                    <Image source ={require('../images/송대말등대.jpg')}  style = {{width: 300, height:300}}/>
                    <JmButton title='송대말등대 빛 체험전시관' onPress={()=>navigation.navigate('송대말등대')}></JmButton>
                    <LastText></LastText>
                    <Image source ={require('../images/연동마을.jpg')}  style = {{width: 300, height:300}}/>
                    <JmButton title='연동마을' onPress={()=>navigation.navigate('연동마을')}></JmButton>
                    <LastText></LastText>
                    <Image source ={require('../images/황리단길.jpg')}  style = {{width: 300, height:300}}/>
                    <JmButton title='황리단길' onPress={()=>navigation.navigate('황리단길')}></JmButton>
                </ScrollView>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        );
};


export default Destination3