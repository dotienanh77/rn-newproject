/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component {
    render() {
        const word = {en: 'One', vn: 'Một', isMemorized: true};
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.textStyleEn}>{word.en}</Text>
                    <Text style={styles.textStyleVn}>
                        {word.isMemorized ? '----' : word.vn}
                    </Text>
                </View>

                <View style={styles.containerTouchable}>
                    <TouchableOpacity style={styles.touchForgot}>
                        <Text style={styles.textTouchForgot}>Forgot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchRemove}>
                        <Text style={styles.textTouchRemove}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-evenly',
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    containerTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    textStyleEn: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
    },
    textStyleVn: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    touchForgot: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    touchRemove: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    textTouchForgot: {fontSize: 14, color: 'white'},
    textTouchRemove: {fontSize: 14, color: 'white'},
});
