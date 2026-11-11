import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { PhonePreview } from '@/components/phone-preview';
import { PHONE_COLORS, PhoneColorKey } from '@/constants/phone-colors';

export default function ProductDetailScreen() {
  const { selectedColor } = useLocalSearchParams<{ selectedColor?: string }>();
  const colorKey: PhoneColorKey =
    selectedColor && selectedColor in PHONE_COLORS
      ? (selectedColor as PhoneColorKey)
      : 'blue';

  const product = PHONE_COLORS[colorKey];

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <PhonePreview colorKey={colorKey} size="large" />
      </View>

      <Text style={styles.title}>
        Tai Nghe Bluetooth Chụp Tai Sony WH-CH520 - Chính hãng
      </Text>

      <View style={styles.row}>
        <Text style={styles.stars}>★★★★★</Text>
        <Text>(Xem 350 đánh giá)</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.oldPrice}>1.590.000 đ</Text>
      </View>

      <Text style={styles.promo}>BẢO HÀNH CHÍNH HÃNG 12 THÁNG</Text>

      <Pressable
        style={styles.colorBtn}
        onPress={() =>
          router.push({
            pathname: '/select-color',
            params: { selectedColor: colorKey },
          })
        }
      >
        <Text style={styles.colorBtnText}>
          4 MÀU - CHỌN MÀU (Đang chọn: {product.name})
        </Text>
        <Text>{'>'}</Text>
      </Pressable>

      <Pressable
        style={styles.buyBtn}
        onPress={() => alert(`Đã chọn mua Tai nghe Sony - Màu: ${product.name}`)}
      >
        <Text style={styles.buyBtnText}>CHỌN MUA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    gap: 10,
  },
  imageBox: {
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  stars: {
    color: 'orange',
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  promo: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  colorBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 6,
  },
  colorBtnText: {
    fontWeight: 'bold',
  },
  buyBtn: {
    backgroundColor: 'red',
    padding: 12,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buyBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
