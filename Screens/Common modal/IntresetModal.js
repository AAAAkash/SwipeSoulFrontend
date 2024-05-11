import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const InterestModal = ({visible, onClose, onSubmit}) => {
  const [selectedIntrest, setSelectedIntrest] = useState('');

  const handleSubmit = () => {
    onSubmit(selectedIntrest);
  };

  // Array of sexual orientations
  const orientationOptions = [
    'Football',
    'Cricket',
    'Baseball',
    'Gym',
    'Cards',
    'Carrom',
    'Party',
    'Other',
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select Sexual Orientation</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedIntrest}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedIntrest(itemValue)
            }>
            {orientationOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: windowWidth * 0.8,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.01,
    color: '#000',
  },
  picker: {
    width: '100%',
    height: windowHeight * 0.07,
    marginBottom: windowHeight * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#EA003D',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default InterestModal;
