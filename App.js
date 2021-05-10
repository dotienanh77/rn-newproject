/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
//import DefaultView from './src/DefaultView';
export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
                <View
                    style={{
                        flex: 0.3,
                        backgroundColor: 'red',
                        borderWidth: 1.5,
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

                <View style={{flex: 0.7, flexDirection: 'row'}}>
                    <View
                        style={{
                            flex: 0.3,
                            backgroundColor: 'pink',
                            borderRightWidth: 1.5,
                            borderBottomWidth: 1.5,
                            borderLeftWidth: 1.5,
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
                    <View style={{flex: 0.7, flexDirection: 'column'}}>
                        <View
                            style={{
                                flex: 0.7,
                                backgroundColor: 'blue',
                                borderRightWidth: 1.5,
                                borderBottomWidth: 1.5,
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
                        <View style={{flex: 0.3, flexDirection: 'row'}}>
                        <View
                            style={{
                                flex: 0.5,
                                backgroundColor: 'brown',
                                borderRightWidth: 1.5,
                                borderBottomWidth: 1.5,
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
                        <View
                            style={{
                                flex: 0.5,
                                backgroundColor: 'green',
                                borderRightWidth: 1.5,
                                borderBottomWidth: 1.5,
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
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
