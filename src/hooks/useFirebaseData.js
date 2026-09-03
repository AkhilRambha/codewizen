import { useState, useEffect, useRef } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../firebase';

function useFirebaseData(key, initialValue) {
  const [data, setDataState] = useState(initialValue);
  const [isReady, setIsReady] = useState(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!database) {
      console.warn("Firebase is not initialized. Check your firebaseConfig.");
      return;
    }

    const dataRef = ref(database, key);
    
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      
      if (val !== null) {
        try {
          setDataState(typeof val === 'string' ? JSON.parse(val) : val);
        } catch (e) {
          setDataState(val);
        }
      } else if (!isInitialized.current) {
        let isEmpty = false;
        if (Array.isArray(initialValue) && initialValue.length === 0) isEmpty = true;
        if (initialValue && typeof initialValue === 'object' && !Array.isArray(initialValue) && Object.keys(initialValue).length === 0) isEmpty = true;

        if (!isEmpty) {
          set(dataRef, JSON.stringify(initialValue)).catch(error => {
            console.error("Firebase write error (initialization):", error);
          });
        } else {
          // If empty array/object was provided and not initialized, ensure state matches initialValue
          setDataState(initialValue);
        }
      } else {
        setDataState(initialValue);
      }
      
      isInitialized.current = true;
      setIsReady(true);
    }, (error) => {
      console.error(`Firebase read error for key "${key}":`, error);
    });

    return () => unsubscribe();
  }, [key]);

  const setData = (newValue) => {
    if (!database) {
      console.warn("Firebase is not initialized. Setting local state only.");
      setDataState(newValue);
      return;
    }

    const valueToStore = newValue instanceof Function ? newValue(data) : newValue;
    setDataState(valueToStore);

    const dataRef = ref(database, key);
    set(dataRef, JSON.stringify(valueToStore)).catch(error => {
      console.error(`Firebase write error for key "${key}":`, error);
    });
  };

  return [data, setData, isReady];
}

export default useFirebaseData;
