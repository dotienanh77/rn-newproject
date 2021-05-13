/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
    constructor(props) {
        // khi kế thừa component thì thêm cái này vào (mặc định)
        super(props); // gọi hàm khởi tạo của component, và thực thi "props" được truyền vào
        this.state = {
            // state là dữ liệu muốn update lai của component , cách định nghĩa một thuộc tính cho class
            count: 0,
        };
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                <Text style={{alignSelf: 'center', fontSize: 30}}>
                    Count : {this.state.count}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            // thay đổi sự kiện
                            // this. setState: goi den thuoc tinh muon cap nhat
                            // ham setState la ham bat dong bo, nen khong duoc lay gia tri phia sau de xu li
                            this.setState({count: this.state.count + 1}, () => {
                                // muon lay du lieu su li phai dung arow function, callback
                                console.log(this.state.count);
                            });
                        }}
                        style={{
                            padding: 10,
                            backgroundColor: 'green',
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 20, color: 'white'}}>
                            Increment
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            // thay đổi sự kiện
                            // this. setState: goi den thuoc tinh muon cap nhat
                            // ham setState la ham bat dong bo, nen khong duoc lay gia tri phia sau de xu li
                            this.setState({count: this.state.count - 1}, () => {
                                // muon lay du lieu su li phai dung arow function, callback
                                console.log(this.state.count);
                            });
                        }}
                        style={{
                            padding: 10,
                            backgroundColor: 'red',
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 20, color: 'white'}}>
                            Decrement
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            // thay đổi sự kiện
                            // this. setState: goi den thuoc tinh muon cap nhat
                            // ham setState la ham bat dong bo, nen khong duoc lay gia tri phia sau de xu li
                            this.setState({count: 0}, () => {
                                // muon lay du lieu su li phai dung arow function, callback
                                console.log(this.state.count);
                            });
                        }}
                        style={{
                            padding: 10,
                            backgroundColor: 'yellow',
                            borderRadius: 5,
                        }}>
                        <Text style={{fontSize: 20, color: 'gray'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
