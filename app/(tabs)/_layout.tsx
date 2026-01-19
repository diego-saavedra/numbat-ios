import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={"house.fill"}></Icon>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Label>Explore</Label>
        <Icon sf={"paperplane.fill"}></Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
