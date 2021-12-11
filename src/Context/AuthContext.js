import React, {useContext, useEffect, useState} from "react";
import {auth, firestore} from "../config";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [userData, setCurrentUserData] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function addUserDetailsToFirestore(data) {
        return firestore.collection("userDetails").add(data);
    }

    function getUserDetailsFromFirestore(email) {
        const doc = firestore.collection('registerData').doc(email).get()
            .then((docRef) => {
                setCurrentUserData(docRef.data());
                console.log(docRef.data())
            })
            .catch((error) => {
            });
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userData,
        login,
        logout,
        signup,
        addUserDetailsToFirestore,
        resetPassword,
        getUserDetailsFromFirestore
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
