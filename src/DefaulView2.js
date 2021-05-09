import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        flex: 0.25,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'green',
        color: 'black',
    },
});

export default function DefaultView2({title, color, textColor}) {
    console.log(color);
    let customStyle;
    if (color) {
        customStyle = {backgroundColor: color};
    }
    return (
        <Text style={[styles.textStyle, customStyle, {color: textColor}]}>
            {title}
        </Text>
    );
}
