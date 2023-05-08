import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta de agua',
    value: '120,25',
    date: '10/04/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Boleto conta de luz',
    value: '80,10',
    date: '02/04/2023',
    type: 0
  },
  {
    id: 3,
    label: 'Pix do cliente joao',
    value: '560,90',
    date: '08/08/2023',
    type: 1 //gastos
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Elison Martins" />
        <Balance saldo="8.360,50" gastos="-1.215,00"/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ( { item }) => <Movements data={item}/> }
        />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
