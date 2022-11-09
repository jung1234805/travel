import React ,{useState, useCallback}from 'react';
import { TouchableWithoutFeedback,Keyboard, Text, View, StyleSheet, Image,ScrollView,Share,RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import JmButton from '../components/JmButton';

const Destination14 = ({navigation}) => {
   
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

const tip={title:'국내 여행지 추천', desc:'낭만과 편리함을 누릴 수 있는 해운대', image:'../images/해운대.jpg'}

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {styles.View}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
            <View style={styles.common}>
              <StyledText>낭만과 편리함을 누릴 수 있는 해운대</StyledText>
              <Image source ={require('../images/해운대.jpg')}  style = {{width: 300, height:300}}/>
              <StyledView contentContainerStyle={styles.scrollView}
                           refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <JmButton title='다시 하기' onPress={()=>navigation.popToTop()}></JmButton>
                <JmButton title='공유 하기' onPress={()=>share()}></JmButton>
              </StyledView>
              <ScrollView style={styles.scrollview}>
                <LastText>추천 여행지</LastText>
                <Image source ={require('../images/청사포.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='청사포' onPress={()=>navigation.navigate('청사포')}></JmButton>
                <LastText></LastText>
                <Image source ={require('../images/동백섬.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='동백섬' onPress={()=>navigation.navigate('동백섬')}></JmButton>
                <LastText></LastText>
                <Image source ={require('../images/해운대해수욕장.jpg')}  style = {{width: 300, height:300}}/>
                <JmButton title='해운대 해수욕장' onPress={()=>navigation.navigate('해운대해수욕장')}></JmButton>
            </ScrollView>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};


export default Destination14