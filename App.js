import { Text, View ,StyleSheet} from 'react-native';
import React, { Component } from 'react';
import {Provider} from 'mobx-react';

import store from './src/store';
import Counter from './src/components/Counter';
import Person from './src/components/Person';
import Users from './src/components/Users';




export default class App extends Component {
  render() {
    //Provider ile sarmalıyoruz
    return (
       <Provider {...store}> 
        <View>
          <Users/>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

