import { Button, TextInput } from '@mantine/core';

import SearchIcon from '@/components/icons/SearchIcon';

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  onSearchSubmit: () => void;
}

const SearchField = ({ value, setValue, onSearchSubmit }: SearchFieldProps) => (
  <TextInput
    value={value}
    onChange={(e) => setValue(e.currentTarget.value)}
    onKeyDown={(e) => e.key === 'Enter' && onSearchSubmit()}
    placeholder="Search movie title"
    maw={490}
    w="100%"
    leftSection={<SearchIcon />}
    rightSection={
      <Button h={32} px="md" onClick={onSearchSubmit}>
        Search
      </Button>
    }
    rightSectionWidth={100}
  />
);

export default SearchField;
