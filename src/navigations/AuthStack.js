import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, MyPage ,MainPage, Schedule, Guide, Materials} from '../screens';
import { recommend001,recommend002,recommend003,recommend004,recommend005, recommend006 } from "../screens";
import Icon from 'react-native-vector-icons/Ionicons';
import { Destination0, Destination1, Destination2, Destination3, Destination4, Destination5, 
    Destination6, Destination7, Destination8, Destination9, Destination10, Destination11, 
    Destination12, Destination13, Destination14, Destination15, 강남관광정보센터,map, 봉은사,
    코엑스, 주문진해변, 안반데기마을,레일바이크,강화평화전망대,고인돌,보문사,연동마을,송대말등대,황리단길,
    엑스포과학공원,유림공원,대전시민천문대,쇠소깍해변, 이중섭거리, 성산일출봉, 해상케이블카, 오동도, 향일암, 선유도공원, 한강유람선, 육삼스퀘어,
    남산타워,국립중앙박물관,우사단길,전주한옥마을,전동성당,경기전,제주레일바이크,한림공원,한라산국립공원,남이섬,강원숲체험장,구곡폭포,꽃지해수욕장,별똥별하늘공원,청산수목원,
    임진각,황포돛배,헤이리예술마을,청사포,동백섬,해운대해수욕장,용주사,백미리마을,전곡항} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Recommend = () => {
    return (
        <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}, headerStyle : {height : 85, backgroundColor : '#5B8F89', borderBottomWidth : 5, borderBottomColor : '#5B8F89'}, 
        headerTitleStyle : {fontsize : 35, color :'#ffffff'}, headerTitleAlign : 'center', headerTitle : '여봐라', headerBackTitleStyle : {fontsize : 30}, headerTintColor : '#ffffff',}}>
            <Stack.Screen name="recommend001"  component={recommend001} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="recommend002" component={recommend002} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="recommend003" component={recommend003} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="recommend004" component={recommend004} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="recommend005" component={recommend005} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="recommend006" component={recommend006} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination0" component={Destination0} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination1" component={Destination1} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination2" component={Destination2} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination3" component={Destination3} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination4" component={Destination4} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination5" component={Destination5} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination6" component={Destination6} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination7" component={Destination7} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination8" component={Destination8} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination9" component={Destination9} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination10" component={Destination10} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination11" component={Destination11} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination12" component={Destination12} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination13" component={Destination13} options = {{ headerBackTitleVisible : false }} />
            <Stack.Screen name="Destination14" component={Destination14} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="Destination15" component={Destination15} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name="강남관광정보센터" component={강남관광정보센터} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name='map' component={map} options = {{ headerBackTitleVisible : false }}/>
            <Stack.Screen name='봉은사' component={봉은사} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='코엑스' component={코엑스} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='주문진해변' component={주문진해변} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='안반데기마을' component={안반데기마을} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='레일바이크' component={레일바이크} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='강화평화전망대' component={강화평화전망대} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='고인돌' component={고인돌} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='보문사' component={보문사} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='송대말등대' component={송대말등대} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='연동마을' component={연동마을} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='황리단길' component={황리단길} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='엑스포과학공원' component={엑스포과학공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='유림공원' component={유림공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='대전시민천문대' component={대전시민천문대} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='쇠소깍해변' component={쇠소깍해변} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='이중섭거리' component={이중섭거리} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='성산일출봉' component={성산일출봉} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='해상케이블카' component={해상케이블카} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='오동도' component={오동도} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='향일암' component={향일암} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='선유도공원' component={선유도공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='한강유람선' component={한강유람선} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='육삼스퀘어' component={육삼스퀘어} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='남산타워' component={남산타워} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='국립중앙박물관' component={국립중앙박물관} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='우사단길' component={우사단길} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='전주한옥마을' component={전주한옥마을} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='전동성당' component={전동성당} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='경기전' component={경기전} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='제주레일바이크' component={제주레일바이크} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='한림공원' component={한림공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='한라산국립공원' component={한라산국립공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='남이섬' component={남이섬} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='강원숲체험장' component={강원숲체험장} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='구곡폭포' component={구곡폭포} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='꽃지해수욕장' component={꽃지해수욕장} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='청산수목원' component={청산수목원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='별똥별하늘공원' component={별똥별하늘공원} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='임진각' component={임진각} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='황포돛배' component={황포돛배} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='헤이리예술마을' component={헤이리예술마을} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='청사포' component={청사포} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='동백섬' component={동백섬} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='해운대해수욕장' component={해운대해수욕장} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='용주사' component={용주사} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='백미리마을' component={백미리마을} options={{headerBackTitleVisible:false}}/>
            <Stack.Screen name='전곡항' component={전곡항} options={{headerBackTitleVisible:false}}/>
        </Stack.Navigator>
    )
}

const TakeMaterials = () => {
    return (
        <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}, headerStyle : {height : 85, backgroundColor : '#5B8F89', borderBottomWidth : 5, borderBottomColor : '#5B8F89'}, 
        headerTitleStyle : {fontsize : 35, color :'#ffffff'}, headerTitleAlign : 'center', headerTitle : '여봐라', headerBackTitleStyle : {fontsize : 30}, headerTintColor : '#ffffff',}}>
            <Stack.Screen name = "Materials" component = {Materials} options = {{ headerBackTitleVisible : false }} />
        </Stack.Navigator>
    )
}
const MyPageSetting = () => {
    return (
        <Stack.Navigator screenOptions = {{cardStyle : {backgroundColor : '#ffffff'}, headerStyle : {height : 85, backgroundColor : '#5B8F89', borderBottomWidth : 5, borderBottomColor : '#5B8F89'}, 
        headerTitleStyle : {fontsize : 35, color :'#ffffff'}, headerTitleAlign : 'center', headerTitle : '여봐라', headerBackTitleStyle : {fontsize : 30}, headerTintColor : '#ffffff',}}>
            <Stack.Screen name = "Login" component = {Login} options = {{ headerBackTitleVisible : false }} />
            <Stack.Screen name = "Signup" component = {Signup} options = {{ headerBackTitleVisible : false }} />
            
        </Stack.Navigator>
    )
}

const AllTabs = () => {
    return(
        <Tab.Navigator screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Signin') {
                iconName = focused ? 'person-sharp' : 'person-outline';
              } else if (route.name === 'Recommend'){
                iconName = focused ? 'train' : 'train-outline';
              } else if (route.name === 'Materials'){
                iconName = focused ? 'folder-sharp' : 'folder-outline';
              }
  
              return <Icon name={iconName} size={size}  color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel : false
          }}
        >
            <Tab.Screen name = "Login" component = {MyPageSetting} options = {{headerShown : false}}/>
            <Tab.Screen name = "Recommend" component = {Recommend} options = {{headerShown : false}}/>
            <Tab.Screen name="Materials"component={TakeMaterials} options = {{headerShown : false}}/>
  
           
        </Tab.Navigator>
    )
}

export default AllTabs;