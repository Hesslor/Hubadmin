import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from './style'
import Colors from '../Colors'

const CustomSearch = (props) => {

  const {filter,placeholder,value,onchange} = {...props}

  useEffect(() => {
    
    updateOrientation();
    // Add event listener for orientation changes
    Dimensions.addEventListener('change', updateOrientation);
  }, [])
  
  const [orientation, setOrientation] = useState(null);
  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setOrientation(width < height ? 'portrait' : null);
  };

  return (
    <View style={filter ? style.containerFilter : style.container}>
        <View style={[style.searchContainer, orientation ? {width: "84%"} : {width: "80%"}]}>
            <View style={style.search}>
                <TextInput 
                style={style.input}
                placeholder= {placeholder ? placeholder : 'Search...'}
                placeholderTextColor={Colors.lightPurple}
                selectionColor={Colors.primaryColor}
                value={value}
                onChangeText={text => onchange(text)}/>
                <TouchableOpacity>
                  <Image source={require("../../assets/images/searchPurple.png")} style={style.searchIcon} />
                </TouchableOpacity>
            </View>
        </View>
        {filter && <Text style={style.FilterText}>Filter</Text>}
    </View>
  )
}

export default CustomSearch