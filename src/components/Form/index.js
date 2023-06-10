import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Image, } from "react-native";
import styles from "./style";
import ResultImc from "./ResultImc/";

export default function Form(props){

   const [height, setHeight]= React.useState(null) 
   const [weight, setWeight]= React.useState(null) 
   const [messageImc, setMessageImc]= useState("Preencha o peso e a altura"); 
   const [imc, setImc]= useState(null)
   const [textButton, setTextButton]= useState("Calcular")
   const [errorMessage, setErrorMessage]= useState(null)


   function imcCalculator(){
    return setImc((weight / (height * height)).toFixed(2))    
   }

   function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
    }
   }
   
   function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual = ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
       
      
    } else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
      
   }
}
   function getWeightStatus(imc) {
    if (imc < 1) {
      return "Modelo que corresponde ao peso";
    } else if (imc < 18.5){
      return "Está abaixo do peso";
    } else if (imc < 25) {
      return 'Está com Peso Normal';
    } else if (imc < 30) {
      return 'Está com Sobrepeso';
    } else if (imc < 35) {
      return 'Está com Obesidade Grau I';
    } else if (imc < 40) {
      return 'Está com Obesidade Grau II';
    } else if (imc >= 40) {
      return 'Está com Obesidade Mórbida';
    } else {
      return 'Sem IMC definido';
    }
  }
  const weightStatus = getWeightStatus(imc);

  function getImageSource(imc) {
    if (imc < 1) {
      return require("./ResultImc/imagens/calculo-imc.jpg");
    } else if (imc < 18.5) {
      return require("./ResultImc/imagens/man1.jpeg");
    } else if (imc < 25) {
      return require("./ResultImc/imagens/man2.jpeg");
    } else if (imc < 30) {
      return require("./ResultImc/imagens/man3.jpeg");
    } else if (imc < 35) {
      return require("./ResultImc/imagens/man4.jpeg");
    } else if (imc < 40) {
      return require("./ResultImc/imagens/man5.jpeg");
    } else if (imc >= 40) {
      return require("./ResultImc/imagens/man6.jpeg");
    } else {
      return null;
    }
  }
  const imageSourceStatus = getImageSource(imc)
  

    return (
        <View style={styles.formContext}>
          <View style={styles.form}>
            <View style={styles.formWh}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.messageError}>{errorMessage}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex.1.75"
            keyboardType="numeric"/>
             
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.messageError}>{errorMessage}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex.75.350"
            keyboardType="numeric"/>
            </View>
             <View>
              <View>
              
            <TouchableOpacity 

            style={styles.buttonCalculator}
            onPress={() => {
                validationImc()
            }}
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} messageWeightStatus={weightStatus}/>
             <Image style={styles.img} source={imageSourceStatus}/>
      
        </View>
          
        
        
    );
}
