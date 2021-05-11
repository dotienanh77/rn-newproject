import React, {Component} from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
// import DefaultView from './src/DefaultView';
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
                    {/* cách 1 */}
                    {/* {word.isMemorized ? '---' : word.vn} */}
                    
                    {/* cách 2, dùng khi render nhiều: tạo chương trình con */}
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
        fontWeight: 'bold',
        color: 'green',
    },
    textStyleVn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});
