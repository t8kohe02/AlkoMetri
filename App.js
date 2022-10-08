import {ScrollView} from 'react-native';
import Styles, { lightMode, darkMode } from './Styles';
import React, {useState} from 'react';
import { Switch, Text, View, TextInput, Button, Alert } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [endresult, setEndresult] = useState(0);
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]

  function Calculate() {
    if (weight === 0) {
      Alert.alert(
        "Don't forget the weight!") 
          
      } 

      let result = 0;
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsl = grams - (burning * time);

      if (gender === 'male') {
        result = gramsl / (weight * 0.7)
      } else {
        result = gramsl / (weight * 0.6)
      }


      if (result < 0 ) {
        setEndresult(0);
       } else {
       setEndresult(result);
       }
  }

  function colorResult() {
    if (endresult>0 && endresult<0.5){
      return {
        color: 'green'
      }
    }
    if (endresult>=0.5 && endresult <1){
      return {
        color: 'yellow'
      }
    }
    if (endresult>=1){
      return {
        color: 'red'
      }
    }
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const mode = isEnabled ? lightMode : darkMode;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={mode.StyleSheet}>
        <View>
            <View>
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor='black'
                    trackColor={{false: 'pink', true: 'grey'}}/>
            </View>
            <View
            style={mode.header}>
              <Text
                style={mode.title}>
                  Alcometer
              </Text>
            </View>
        </View>

        <View
          style={mode.View}>
            <Text
              style={mode.label}>
                Weight</Text>
            <TextInput
                style={mode.textInput}
                onChangeText={setWeight}
                placeholder="Weight in kilos"
                keyboardType="numeric"
                />

            <Text
              style={mode.label}>
                Bottles</Text>
            <NumericInput 
                onChange={v => setBottles(v)}
                minValue={0}
                />

            <Text
              style={mode.label}>
                Hours</Text>
            <NumericInput
              style={mode.numeric} 
                onChange={v => setTime(v)}
                minValue={0}
                />

            <Text
            style={mode.label}>
                Gender</Text>
            <RadioForm
              style={mode.radio}
                buttonSize = {15}
                buttonColor = {'black'}
                selectedButtonColor = {'black'}
                radio_props={genders}
                initial={0}
                onPress={(value) => setGender(value)}
                />

            <Button
                title="Calculate"
                color = {'black'}
                onPress={()=>Calculate()}/>

            <Text
              style={[mode.result,colorResult()]}>
                {endresult.toFixed(2)}</Text>
        </View>
    </ScrollView>
  );
};
