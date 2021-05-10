/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
//import DefaultView from './src/DefaultView';
export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 0.2, flexDirection: 'row'}}>
                    <View
                        style={{
                            flex: 0.3,
                            backgroundColor: 'red',
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            1
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.7,
                            backgroundColor: 'pink',
                            borderTopWidth: 2,
                            borderRightWidth: 2,
                            borderBottomWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            2
                        </Text>
                    </View>
                </View>
                <View style={{flex: 0.8, flexDirection: 'column'}}>
                    <View style={{flex: 0.7, flexDirection: 'row'}}>
                        <View style={{flex: 0.8, flexDirection: 'column'}}>
                            <View
                                style={{
                                    flex: 0.5,
                                    backgroundColor: 'khaki',
                                    borderLeftWidth: 2,
                                    borderRightWidth: 2,
                                    borderBottomWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }}>
                                    3
                                </Text>
                            </View>
                            {/* 4 */}
                            <View
                                style={{
                                    flex: 0.5,
                                    backgroundColor: 'violet',
                                    borderLeftWidth: 2,
                                    borderRightWidth: 2,
                                    borderBottomWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }}>
                                    4
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 0.2,
                                backgroundColor: 'purple',
                                borderRightWidth: 2,
                                borderBottomWidth: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                5
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 0.3, flexDirection: 'row'}}>
                        <View
                            style={{
                                flex: 0.5,
                                backgroundColor: 'brown',
                                borderRightWidth: 2,
                                borderLeftWidth: 2,
                                borderBottomWidth: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                6
                            </Text>
                        </View>

                        <View
                            style={{
                                flex: 0.5,
                                backgroundColor: 'orange',
                                borderRightWidth: 2,
                                borderBottomWidth: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}>
                                7
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
