import { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Keyboard,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import MapView, {
  Marker,
  MapPressEvent,
  MarkerDragStartEndEvent,
  Region,
} from 'react-native-maps';
import * as Location from 'expo-location';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationHeader } from '@/components/navigation-header';
import { Button } from '@/components/button';
import { useStore } from '@/store/useStore';
import { COLORS } from '@/consts/colors';
import { setMapSelection } from '@/features/user/services/map-selection';

const GUATEMALA_CITY: Region = {
  latitude: 14.6349,
  longitude: -90.5069,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const MapPickerScreen = () => {
  const { t } = useTranslation();
  const { user } = useStore();
  const params = useLocalSearchParams<{
    latitude?: string;
    longitude?: string;
  }>();

  const initialLat = params.latitude ? parseFloat(params.latitude) : null;
  const initialLng = params.longitude ? parseFloat(params.longitude) : null;

  const mapRef = useRef<MapView>(null);
  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(
    initialLat && initialLng
      ? { latitude: initialLat, longitude: initialLng }
      : null,
  );
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [initialRegion, setInitialRegion] = useState<Region>(GUATEMALA_CITY);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setLoading(false);
          return;
        }

        if (initialLat && initialLng) {
          setInitialRegion({
            latitude: initialLat,
            longitude: initialLng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        } else {
          const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
          });
          setInitialRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      } catch {
        // Use default region
      } finally {
        setLoading(false);
      }
    })();
  }, [initialLat, initialLng]);

  const handleMapPress = (event: MapPressEvent) => {
    const coords = event.nativeEvent.coordinate;
    setMarker(coords);
  };

  const handleMarkerDragEnd = (event: MarkerDragStartEndEvent) => {
    const coords = event.nativeEvent.coordinate;
    setMarker(coords);
  };

  const geocodeWithNominatim = async (query: string) => {
    const encoded = encodeURIComponent(query);
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1&countrycodes=gt`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'MekapalApp/1.0' },
    });
    const data = await response.json();
    if (data.length > 0) {
      return {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };
    }
    return null;
  };

  const handleSearch = useCallback(async () => {
    if (!searchText.trim()) return;

    Keyboard.dismiss();
    setSearching(true);

    try {
      const query = searchText.toLowerCase().includes('guatemala')
        ? searchText
        : `${searchText}, Guatemala`;

      // Try expo-location first, fallback to Nominatim
      let coords: { latitude: number; longitude: number } | null = null;

      try {
        const results = await Location.geocodeAsync(query);
        if (results.length > 0) {
          coords = {
            latitude: results[0].latitude,
            longitude: results[0].longitude,
          };
        }
      } catch {
        // expo geocoding failed, try fallback
      }

      if (!coords) {
        coords = await geocodeWithNominatim(query);
      }

      if (coords) {
        const newRegion: Region = {
          ...coords,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };
        setMarker(coords);
        mapRef.current?.animateToRegion(newRegion, 500);
      }
    } catch {
      // Silently fail
    } finally {
      setSearching(false);
    }
  }, [searchText]);

  const handleConfirm = () => {
    if (!marker) return;

    setMapSelection(marker);
    router.back();
  };

  if (loading) {
    return (
      <>
        <NavigationHeader title="" showBackButton borderBottom={false} />
        <View className="flex-1 items-center justify-center bg-background-100">
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </>
    );
  }

  return (
    <>
      <NavigationHeader title="" showBackButton borderBottom={false} />
      <View className="flex-1">
        {/* Search bar */}
        <View className="absolute left-4 right-4 top-2 z-10 flex-row items-center rounded-lg bg-white px-3 shadow-md">
          <MaterialCommunityIcons
            name="magnify"
            size={22}
            color={COLORS.lightGray[700]}
          />
          <TextInput
            className="flex-1 px-2 py-3 font-plus-jakarta text-base"
            placeholder={t('profile.address.searchPlaceholder')}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            autoCorrect={false}
          />
          {searching && (
            <ActivityIndicator size="small" color={COLORS.primary} />
          )}
        </View>

        {/* Map */}
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={initialRegion}
          onPress={handleMapPress}
          showsUserLocation
          showsMyLocationButton
          zoomEnabled
          zoomControlEnabled={false}
          scrollEnabled
          rotateEnabled={false}
        >
          {marker && (
            <Marker
              coordinate={marker}
              draggable
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </MapView>

        {/* Confirm button */}
        <View className="absolute bottom-8 left-4 right-4">
          <Button
            title={t('profile.address.confirmLocation')}
            onPress={handleConfirm}
            disabled={!marker}
            userType={user?.role}
            variant="contained"
          />
        </View>
      </View>
    </>
  );
};

export default MapPickerScreen;
