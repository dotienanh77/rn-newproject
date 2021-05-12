import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

export default class App extends Component {
    shouldRenderVn = (word) => {
        if (word.isMemorized) {
            return '----';
        } else {
            return word.vn;
        }
    };
    render() {
        const word = {en: 'One', vn: 'Một', isMemorized: true};
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.textStyleEn}>{word.en}</Text>
                <Text style={styles.textStyleVn}>
                    {/* {word.isMemorized ? '----' : word.vn} */}
                    {this.shouldRenderVn(word)}
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
