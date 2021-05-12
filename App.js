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
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',
                            padding: 10,
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 14, color: 'white'}}>
                            Forgot
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            padding: 10,
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 14, color: 'white'}}>
                            Remove
                        </Text>
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
});
