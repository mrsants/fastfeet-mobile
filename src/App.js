import { useSelector } from 'react-redux';

import Router from '~/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  return Router(signed);
}
