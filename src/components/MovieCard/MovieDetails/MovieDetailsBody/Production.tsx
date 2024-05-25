import { Center, Group, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core';

import logoPlaceholder from '@/assets/images/logo_placeholder.svg';
import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { ProductionCompany } from '@/types';

interface ProductionProps {
  companies: Array<ProductionCompany>;
}

const Production = ({ companies }: ProductionProps) => {
  const theme = useMantineTheme();

  return (
    <Stack align="flex-start" gap="lg" w="100%">
      <Stack align="flex-start" gap="md" w="100%">
        <Title order={4} fz={theme.fontSizes.md} lh={1}>
          Production
        </Title>
        <Stack align="flex-start" gap="sm">
          {companies.map((company) => (
            <Group key={company.id} gap="xxs" wrap="nowrap">
              <Center w={40} h={40}>
                <Image
                  w={40}
                  mah={40}
                  alt={company.name}
                  src={
                    company.logo_path
                      ? `${API_BASE_URL}${API_ROUTES.LOGOS}${company.logo_path}`
                      : logoPlaceholder.src
                  }
                />
              </Center>
              <Text key={company.id} fz="sm" fw={700} lh="sm">
                {company.name}
              </Text>
            </Group>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Production;
