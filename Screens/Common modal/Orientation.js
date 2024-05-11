import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Orientation = ({visible, onClose, onSubmit}) => {
  const [selectedOrientation, setSelectedOrientation] = useState('');

  const handleSubmit = () => {
    onSubmit(selectedOrientation);
    onClose();
  };

  // Array of sexual orientations
  const orientationOptions = ['Male', 'Female'];

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Select Gender</Text>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollView}>
            {orientationOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => setSelectedOrientation(option)}>
                <Text style={styles.itemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    width: '99%',
    maxWidth: windowWidth * 0.99,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cancelText: {
    color: '#000',
    fontSize: 19,
  },
  saveText: {
    color: '#EA003D',
    fontSize: 19,
  },
  scrollView: {
    maxHeight: windowHeight * 0.3,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Orientation;
