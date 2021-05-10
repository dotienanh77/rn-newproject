/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';
//import DefaultView from './src/DefaultView';
export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 0.4, flexDirection: 'column'}}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'cyan',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>1</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'pink',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>2</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'blue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>3</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>4</Text>
                    </View>
                </View>
                <View style={{flex: 0.6, flexDirection: 'row'}}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'khaki',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>1</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'gray',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>2</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'blueviolet',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>3</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'pink',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{textColor: 'white'}}>4</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//     },
//     containerText: {
//         flex: 0.4,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     containerText2: {
//         flex: 0.6,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         textAlign: 'center',
//         // alignItems: 'stretch',
//     },
// });
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.containerText}>
//                     <Default
//                         justifyContent: 'center',
//                         title="view100"
//                         color="red"
//                         textColor="white"
//                     />
//                     <DefaultView title="view200" color="cyan" />
//                     <DefaultView title="view300" color="green" />
//                     <DefaultView title="view400" color="pink" />
//                 </View>
//                 <View style={styles.containerText2}>
//                     <DefaultView title="view100" color="red" />
//                     <DefaultView title="view200" color="cyan" />
//                     <DefaultView title="view300" color="green" />
//                     <DefaultView title="view400" color="pink" />
//                 </View>
//             </SafeAreaView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//     },
//     containerText: {
//         flex: 0.4,
//         flexDirection: 'column',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
//     containerText2: {
//         flex: 0.6,
//         flexDirection: 'row',
//     },
//     containerTouchable: {
//         marginTop: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//     },
//     textStyleEn: {
//         color: 'green',
//         fontWeight: 'bold',
//     },
//     textStyleVn: {
//         fontSize: 20,
//         color: 'red',
//         fontWeight: 'bold',
//     },
//     touchForgot: {
//         padding: 10,
//         backgroundColor: 'green',
//         borderRadius: 5,
//     },
//     touchRemove: {
//         padding: 10,
//         backgroundColor: 'yellow',
//         borderRadius: 5,
//     },
//     textTouchForgot: {
//         fontSize: 14,
//         color: 'white',
//     },
//     textTouchRemove: {
//         fontSize: 14,
//         color: 'black',
//     },
// });
