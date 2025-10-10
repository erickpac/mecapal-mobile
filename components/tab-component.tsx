import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, ToggleButton } from 'react-native-paper';
import { COLORS } from '@/consts/colors';
interface TabItem {
  title: string;
  component: React.ReactNode;
  activeColor?: string;
}

interface TabComponentProps {
  tabs: TabItem[];
  defaultActiveTab?: number;
  tabStyle?: string;
  contentStyle?: string;
  defaultActiveColor?: string;
}

const TabComponent: React.FC<TabComponentProps> = ({
  tabs,
  defaultActiveTab = 0,
  tabStyle = '',
  contentStyle = '',
  defaultActiveColor = '#642E14',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View className={`flex-1 ${tabStyle}`}>
      <View className="flex-row items-center justify-center px-28 py-2">
        {tabs.map((tab, index) => {
          const activeColor = tab.activeColor || defaultActiveColor;
          return (
            <ToggleButton
              key={index}
              icon={() => (
                <Text
                  className={`text-center font-plus-jakarta-medium text-lg font-medium ${
                    activeTab === index ? '' : 'text-[#00000099]'
                  }`}
                  style={{
                    color:
                      activeTab === index ? activeColor : 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {tab.title}
                </Text>
              )}
              value={index + ''}
              status={activeTab === index ? 'checked' : 'unchecked'}
              onPress={() => handleTabPress(index)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                borderBottomWidth: activeTab === index ? 2 : 0,
                borderBottomColor: activeColor,
                borderRadius: 0,
                marginHorizontal: 4,
                padding: 0,
              }}
            />
          );
        })}
      </View>

      <ScrollView className={`flex-1 ${contentStyle}`}>
        <View className="flex-1">{tabs[activeTab]?.component}</View>
      </ScrollView>
    </View>
  );
};

export default TabComponent;
