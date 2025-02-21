import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import loginAnimation from "../assets/loginAnimation.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { FIREBASE_AUTH } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      alert("Registration failed", +error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const signUp = async () => {
    setIsLoading(true);
    try {
      const response = createUserWithEmailAndPassword(auth, email, password);
      alert("account created");
      navigation.navigate("tabNavigation");
    } catch (error) {
      console.error(error);
      alert("Sign Up failed" + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.headSection}>
          {/* illustration goes here */}
          <LottieView
            source={loginAnimation}
            style={styles.headAnimation}
            loop
            autoPlay
          />
        </View>
        <Text style={styles.login}>Login</Text>
        <Text style={{ margin: "auto", fontSize: 16 }}>Login and join us!</Text>
        <View style={styles.inputs}>
          <TextInput
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Username : "
            value={username}
            onChangeText={(e) => setUsername(e)}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Email : "
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Password : "
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        {/* enter existing account or login */}
        <TouchableOpacity onPress={signIn} style={styles.button}>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        {/* Create new account */}
        <TouchableOpacity onPress={signUp} style={styles.button}>
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.sign}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginVertical: "auto",
  },
  headAnimation: {
    width: 200,
    height: 200,
    marginHorizontal: "auto",
  },
  sign: {
    fontWeight: "bold",
    color: "blue",
  },
  signUpContainer: {
    flexDirection: "row",
    gap: 1,
    marginHorizontal: "auto",
    marginTop: 10,
  },
  inputs: {
    width: "100%",
    marginHorizontal: "auto",
    marginTop: 20,
  },
  login: {
    marginHorizontal: "auto",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    width: "80%",
    marginHorizontal: "auto",
    marginTop: 10,
    height: 70,
    borderRadius: 10,
    borderColor: "gray",
  },
  button: {
    width: "80%",
    alignItems: "center",
    height: 60,
    marginHorizontal: "auto",
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    marginHorizontal: "auto",
    marginVertical: "auto",
    fontWeight: "bold",
    color: "white",
  },
  auth: {
    marginHorizontal: "auto",
  },
  google: {
    marginTop: 10,
    color: "blue",
  },
});
