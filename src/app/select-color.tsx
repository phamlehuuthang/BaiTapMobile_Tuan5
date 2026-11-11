import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { PhonePreview } from '@/components/phone-preview';
import {
  COLOR_OPTIONS,
  PHONE_COLORS,
  PhoneColorKey,
} from '@/constants/phone-colors';

export default function SelectColorScreen() {
  const { selectedColor } = useLocalSearchParams<{ selectedColor?: string }>();
  const initialKey: PhoneColorKey =
    selectedColor && selectedColor in PHONE_COLORS
      ? (selectedColor as PhoneColorKey)
      : 'blue';

  const [colorKey, setColorKey] = useState<PhoneColorKey>(initialKey);
  const current = PHONE_COLORS[colorKey];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <PhonePreview colorKey={colorKey} size="small" />
        <View style={styles.infoBox}>
          <Text style={styles.title}>Tai Nghe Bluetooth Sony WH-CH520</Text>
          <Text>Hàng chính hãng</Text>
          <Text>Màu: {current.name}</Text>
          <Text>Cung cấp bởi: {current.provider}</Text>
          <Text style={styles.price}>{current.price}</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.subtitle}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorList}>
          {COLOR_OPTIONS.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setColorKey(item.id)}
              style={[
                styles.colorBox,
                { backgroundColor: item.colorCode },
                colorKey === item.id && styles.activeBox,
              ]}
            />
          ))}
        </View>

        <Pressable
          style={styles.doneBtn}
          onPress={() =>
            router.replace({
              pathname: '/',
              params: { selectedColor: colorKey },
            })
          }
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flexDirection: 'row',
    padding: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  infoBox: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    padding: 16,
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorList: {
    alignItems: 'center',
    gap: 10,
  },
  colorBox: {
    width: 75,
    height: 65,
    borderWidth: 1,
    borderColor: '#555',
  },
  activeBox: {
    borderWidth: 3,
    borderColor: 'yellow',
  },
  doneBtn: {
    backgroundColor: '#1952E2',
    padding: 12,
    alignItems: 'center',
  },
  doneText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
