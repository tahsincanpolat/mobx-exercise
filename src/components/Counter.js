import { Button, Text, View , StyleSheet} from 'react-native';
import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';


@inject('CounterStore') // Counter store üzerinde çalışıyoruz bi nevi import ediyoruz.
@observer // Bunun mobx tarafından takip edilebilir olduğunu belirtmek.
export default class Counter extends Component {
  render() {
      const {CounterStore} = this.props;
    return (
      <View>
        <Text>{CounterStore.count}</Text>
        <View style={styles.buttonContainer}>
            <Button
            title={'Decrement'}
            onPress={()=>CounterStore.decrement()}
            />
            <Button
            title={'Increment'}
            onPress={()=>CounterStore.increment()}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row'
    }
})
