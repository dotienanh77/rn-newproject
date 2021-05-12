/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component {
    render() {
        const word = {en: 'One', vn: 'Một', isMemorized: false};
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerWord}>
                    <View style={styles.containerText}>
                        <Text style={styles.textStyleEn}>{word.en}</Text>
                        <Text style={styles.textStyleVn}>
                            {word.isMemorized ? '----' : word.vn}
                        </Text>
                    </View>
                    <View style={styles.containerTouchable}>
                        <TouchableOpacity
                            style={{
                                ...styles.touchForgot, // ... sao chép thuộc tính trong touchForgot vòo mảng hiện tại
                                backgroundColor: word.isMemorized
                                    ? 'green'
                                    : 'red',
                            }}>
                            <Text style={styles.textTouchForgot}>
                                {word.isMemorized ? 'Forgot' : 'Memorized'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchRemove}>
                            <Text style={styles.textTouchRemove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20, // cách đều 2 bên
    },
    containerWord: {
        justifyContent: 'center',
        height: '13%', // kích thước chuẩn
        flexDirection: 'column',
        backgroundColor: 'gainsboro',
        elevation: 5,
        borderRadius: 5, // bo tròn
    },
    containerText: {
        flexDirection: 'row',
    },
});
