import { useQueryState } from "next-usequerystate";
import { useEffect, useState } from "react";

export function usePersistedQueryState(
  key: string
): ReturnType<typeof useQueryState> {
  const [value, setValue] = useQueryState(key);
  const [initialized, setInitialized] = useState(false);
  const [storedValue, setStoredValue] = useState<string | null>(null);

  useEffect(() => {
    if (!initialized) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(storedValue);
        setStoredValue(storedValue);
      }
      setInitialized(true);
    }
  }, [initialized, key, setValue]);

  useEffect(() => {
    if (value !== storedValue && value !== null && value !== undefined) {
      localStorage.setItem(key, value);
      setStoredValue(value);
    }
  }, [key, storedValue, value]);

  return [value, setValue];
}
