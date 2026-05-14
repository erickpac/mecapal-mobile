import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '@/consts/colors';

export type SnackbarVariant = 'success' | 'error' | 'info';

export interface ShowSnackbarOptions {
  message: string;
  variant?: SnackbarVariant;
  duration?: number;
}

export interface SnackbarContextValue {
  showSnackbar: (options: ShowSnackbarOptions) => void;
  hideSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextValue | undefined>(
  undefined,
);

const DEFAULT_DURATION = 3000;

const VARIANT_BACKGROUNDS: Record<SnackbarVariant, string> = {
  success: COLORS.success,
  error: COLORS.error,
  info: COLORS.darkGray[800],
};

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

const VARIANT_ICONS: Record<SnackbarVariant, IconName> = {
  success: 'check-circle',
  error: 'alert-circle',
  info: 'information',
};

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState<SnackbarVariant>('info');
  const [duration, setDuration] = useState<number>(DEFAULT_DURATION);
  const queueRef = useRef<ShowSnackbarOptions[]>([]);
  // Mirror `visible` into a ref so `showSnackbar` can read the latest value
  // without taking it as a dependency — this keeps the callback identity
  // stable, so consumers can safely use `showError` etc. in effect deps.
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  const presentNext = useCallback(() => {
    const next = queueRef.current.shift();
    if (!next) return;
    setMessage(next.message);
    setVariant(next.variant ?? 'info');
    setDuration(next.duration ?? DEFAULT_DURATION);
    setVisible(true);
  }, []);

  const showSnackbar = useCallback(
    (options: ShowSnackbarOptions) => {
      if (visibleRef.current) {
        // Replace currently shown snackbar with the new one for fresher feedback.
        queueRef.current = [options];
        setVisible(false);
        return;
      }
      queueRef.current.push(options);
      presentNext();
    },
    [presentNext],
  );

  const hideSnackbar = useCallback(() => {
    setVisible(false);
  }, []);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    // Allow Paper's exit animation to complete before showing the next queued item.
    setTimeout(presentNext, 200);
  }, [presentNext]);

  const value = useMemo<SnackbarContextValue>(
    () => ({ showSnackbar, hideSnackbar }),
    [showSnackbar, hideSnackbar],
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        visible={visible}
        onDismiss={handleDismiss}
        duration={duration}
        wrapperStyle={[
          styles.wrapper,
          { paddingBottom: Math.max(insets.bottom, 16) },
        ]}
        style={[
          styles.snackbar,
          { backgroundColor: VARIANT_BACKGROUNDS[variant] },
        ]}
      >
        <View style={styles.content}>
          <MaterialCommunityIcons
            name={VARIANT_ICONS[variant]}
            size={20}
            color={COLORS.white}
            style={styles.icon}
          />
          <Text style={styles.message} numberOfLines={3}>
            {message}
          </Text>
        </View>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },
  snackbar: {
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  message: {
    flex: 1,
    color: COLORS.white,
    fontFamily: 'Plus Jakarta Sans Medium',
    fontSize: 14,
  },
});
