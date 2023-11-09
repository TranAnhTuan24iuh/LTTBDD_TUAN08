import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Layout1() {
  return (
    <View style={styles.container}>
        <View style={[{
                              width: '100%',
                              alignItems: 'center',
                              marginVertical: 40,
                         },
                    ]}
               ></View>
      <View style={{ flexDirection: 'row', marginRight: 15, justifyContent:'right' }}>
               <Image
                    source={require('../../assets/avatar.png')}
                    style={{
                         width: 50,
                         height: 50,
                         backgroundColor:'blue',
                         borderRadius:'50%',
                    }}
                    resizeMode='contain'
               />
               <View>
               <Text style={{ fontSize: 20, fontWeight: 700 }}>
                         Hi Tiwnkle
                    </Text>
                    <Text
                         style={[
                              {
                                   fontWeight: 700,
                                   fontSize: 14,
                                   color: '#9095A0',
                              },
                         ]}
                    >
                         Have agarte day a good
                    </Text>
               </View>
          </View>
        <View style={[styles.formContainer]}>
            <View style={[styles.inputContainer]}>
            <Ionicons name='search'
                   color={'#000'}
                   size={24}
                    style={{
                   position: 'absolute',
                    left: 20,
                                   }}
                              />
        <TextInput  placeholder='search'
                                   style={styles.inputText}
                                   value={null}>

        </TextInput>
            </View>
        
        </View>
          <View
                    style={[
                         {
                              width: '100%',
                              flex: 3,
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 15,
                         },
                    ]}
               >

                    <TouchableOpacity
                         style={{
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#00BDD6',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '15%',
                              borderRadius: '50%',
                         }}
                         
                    >
                         <Ionicons name='add' color={'#fff'} size={30} />
                    </TouchableOpacity>

               </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    },
    inputContainer: {
    borderColor: 'gray',
    width: '100%',
    justifyContent: 'center',
    },


});