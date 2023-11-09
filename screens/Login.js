import React, { useEffect, useState } from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { View, Text, Button } from 'react-native'
const Login = () => {
    const [user, setUser] = useState(null)
    const signOut = async () => {
        try {
            console.log('signout', await GoogleSignin.signOut())
            setUser(user); // Remember to remove the user from your Login's state as well
        } catch (error) {
            console.error(error);
        }
    };

    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        setState({ currentUser });
    };
    const signIn = async () => {
        try {
            // await GoogleSignin.hasPlayServices();
            console.log("userinfo", userInfo = await GoogleSignin.signIn());
            setUser(user);

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(error.message);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log(error.message);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log(error.message);
            } else {
                console.log(error.message);
            }
        }
    };
    useEffect(() => {

        GoogleSignin.configure({
            webClientId: '930587703304-0tgfd0lm59ao27opglvs0pus6nj5clf7.Logins.googleusercontent.com',
        });
    }

        , [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <GoogleSigninButton
        // style={{ width: 312, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => { signIn() }}
      /> */}
      <Text>hiiiiii</Text>
            <Button
                title="Google Sign-In"
                onPress={() => { signIn() }}
            />
            <Button
                title="Google Sign-out"
                onPress={() => { signOut() }}
            />
        </View>
    );
}

export default Login