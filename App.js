/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, SafeAreaView, View, Platform} from 'react-native';
import DefaultView from './src/DefaultView';
export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.2}}>
                    <DefaultView title="1" color="green" textColor="white"/></View>       
                    <View style={{flex: 0.8, flexDirection: 'column'}}>
                        <DefaultView title="3" color="red" textColor="white"/>
                        <DefaultView title="4" color="pink" textColor="white"/>
                    </View> 
                </View>

                <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.2}}>
                    <DefaultView title="2" color="red" textColor="white"/></View>
                    <View style={{flex: 0.5, flexDirection: 'column'}}> 
                        <DefaultView title="5" color="cyan" textColor="white"/>
                        <DefaultView title="6" color="violet" textColor="white"/>
                    </View>
                    <View style={{flex: 0.3, flexDirection: 'column'}}>
                        <DefaultView title="7" color="brown" textColor="white"/>
                        <DefaultView title="8" color="orange" textColor="white"/>
                        <DefaultView title="9" color="black" textColor="white"/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
