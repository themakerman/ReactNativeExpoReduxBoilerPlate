import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
 } from 'react-native';
import { connect } from 'react-redux';
import { testActionAsync, testAction } from '../../src/actions/';
import _ from 'lodash';

class BoilerPlateComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Boiler Plate Component</Text>
        <TouchableOpacity style={{ width: 100, height: 20, backgroundColor: 'red' }} onPress={() => this.props.testAction('woaa')}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ testReducer }) => {
  return { testReducer };
};

export default connect(mapStateToProps, { testActionAsync, testAction })(BoilerPlateComponent);
