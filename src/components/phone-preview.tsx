import React from 'react';
import { Image } from 'react-native';
import { PHONE_COLORS, PhoneColorKey } from '@/constants/phone-colors';

interface PhonePreviewProps {
  colorKey: PhoneColorKey;
  size?: 'large' | 'small';
}

/**
 * Renders a lightweight visual mockup of the Vsmart Joy 3 in the selected color
 * so the app works reliably without external image URLs.
 */
export function PhonePreview({ colorKey, size = 'large' }: PhonePreviewProps) {
  const option = PHONE_COLORS[colorKey] || PHONE_COLORS.blue;
  const isSmall = size === 'small';

  return (
    <Image
      source={option.image}
      resizeMode="contain"
      style={
        isSmall
          ? { width: 90, height: 110 }
          : { width: 220, height: 260 }
      }
    />
  );
}
