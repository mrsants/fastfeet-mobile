import React from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  
  return <Routes logged={signed} />;
}
