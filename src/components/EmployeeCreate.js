import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jermaine Cole"
            value={this.props.name}
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
            <CardSection style={{ borderBottomWidth: 0 }}>
                <Picker
                  style={{ flex: 1 }}
                  selectedValue={this.props.shift}
                  onValueChange={(value) => this.props.employeeUpdate({ prop: 'shift', value })}
                >
                  <Picker.item label="Monday" value="Monday" />
                  <Picker.item label="Tuesday" value="Tuesday" />
                  <Picker.item label="Wednesday" value="Wednesday" />
                  <Picker.item label="Thursday" value="Thursday" />
                  <Picker.item label="Friday" value="Friday" />
                  <Picker.item label="Saturday" value="Saturday" />
                  <Picker.item label="Sunday" value="Sunday" />
                </Picker>

            </CardSection>
        </CardSection>

        <CardSection>
          <Button action={this.onButtonPress.bind(this)}>
            Create
          </Button>

        </CardSection>

      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
