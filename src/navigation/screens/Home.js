import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';

import {getDummyData} from '../../redux/features/thunks';

const Home = () => {
  const dispatch = useDispatch();
  const dummyData = useSelector(state => state.main.dummyData);

  React.useEffect(() => {
    dispatch(getDummyData());
  }, [dispatch]);

  return (
    <View>
      <Text>Home</Text>
      <ScrollView>
        {dummyData.map((item, index) => {
          return (
            <Card key={index} style={styles.card}>
              <Card.Title title={item.title} />
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
