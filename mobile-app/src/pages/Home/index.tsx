import React, { useEffect, useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground,Image, StyleSheet, Text, Button } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUfResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [selectedCityPicker, setSelectedCityPicker] = useState<boolean>(false);

  useEffect(() => {
    axios.get<IBGEUfResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla)

      setUfs(ufInitials);
    });
  }, [])

  useEffect(() => {
    if(selectedUf === '0') return;
    
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome)

      setCities(cityNames);
    });
  }, [selectedUf, ufs])
  
  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      selectedUf,
      selectedCity,
    })
  }

  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
      
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
      </View>

      <View style={styles.footer}>

      <View style={{ flex: 1, paddingBottom: 140}}>
        <RNPickerSelect
            onValueChange={(uf) => setSelectedUf(uf)}
            onDonePress={() => { setSelectedCityPicker(true) }}
            placeholder={{label: 'Selecione o estado (UF)' }}
            style={{...pickerSelectStyles}}
            items={ufs.map(uf => (
              { label: uf, value: uf }
            ))}
        />
        <Icon name="chevron-down" size={24} color="#6C6C80" />
      

        <RNPickerSelect
              onValueChange={(city) => setSelectedCity(city)}
              placeholder={{label: 'Selecione a cidade' }}
              value={ selectedCityPicker !== true ?  '' : selectedCity}
              style={{...pickerSelectStyles}}
              items={cities.map(city => (
                { label: city, value: city }
              ))}
          />
        <Icon name="chevron-down" size={24} color="#6C6C80" width={'end'} />
      </View>         

        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  )
};

const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    paddingVertical: 24,
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;