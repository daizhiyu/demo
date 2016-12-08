import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';
import commonStyles from '../utils/commonStyles';

export default class SingList extends Component {
   
  render() {
    const { data,  handler } = this.props;
    return (
      <TouchableOpacity style={[commonStyles.list]} onPress={handler}>
      <Text >{data}</Text>
      </TouchableOpacity>
    );
  }

 static propTypes = {
    data: PropTypes.string,
    handler: PropTypes.func,
  };

  static defaultProps = {
    data: '',
    onPress: () => ({}),
  };
  
}
