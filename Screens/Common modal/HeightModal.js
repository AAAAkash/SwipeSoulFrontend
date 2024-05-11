import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const HeightModal = ({ visible, onSubmit, onClose }) => {
  const heightOptions = [];
  for (let feet = 2; feet <= 10; feet++) {
    for (let inches = 0; inches < 12; inches++) {
      heightOptions.push(`${feet}'${inches}" (${feet * 30.48 + inches * 2.54} cm)`);
    }
  }

  const handleSubmit = (item) => {
    onSubmit(item);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <View style={[styles.container, visible ? styles.visible : styles.hidden]}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Select Height</Text>
          <TouchableOpacity onPress={() => handleSubmit('')}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {heightOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleSubmit(option)}
            >
              <Text style={styles.itemText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  visible: {
    zIndex: 1,
  },
  hidden: {
    display: 'none',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '99%',
    maxHeight: windowHeight * 0.6,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#000'
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
    alignItems:'center'
  },
  itemText: {
    fontSize: 16,
  },
});

export default HeightModal;
