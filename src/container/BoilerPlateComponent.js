import React from 'react';
import {
  View,
  Text,
  StyleSheet
 } from 'react-native';
import { connect } from 'react-redux';
import { testActionAsync, testAction } from '../../src/actions/';
import _ from 'lodash';

class BoilerPlateComponent extends React.Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Boiler Plate Component</Text>
      </View>
    );
  }

  componentDidMount() {
    this.props.testAction('walao');
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
