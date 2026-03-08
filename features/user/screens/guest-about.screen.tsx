import { ScrollView } from 'react-native';

import { Header } from '@/components/header';
import HowItWorks from '@/components/how-it-works';

export default function GuestAboutScreen() {
  return (
    <>
      <Header />
      <ScrollView className="flex-1 bg-[#fbf9f4]">
        <HowItWorks />
      </ScrollView>
    </>
  );
}
