import { Group, NumberFormatter, Text, useMantineTheme } from '@mantine/core';

interface MoneyValueProps {
  label: string;
  amount: number;
}

const MoneyValue = ({ label, amount }: MoneyValueProps) => {
  const theme = useMantineTheme();

  return (
    <Group align="center" gap="xxs" wrap="nowrap">
      <Text w={{ base: 90, sm: 140 }} c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
        {label}
      </Text>
      <Text fz="sm" fw={400} lh="xs">
        <NumberFormatter value={amount} prefix="$" thousandSeparator />
      </Text>
    </Group>
  );
};

export default MoneyValue;
