import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'4'}>
          <Heading textTransform={'uppercase'} size={'md'} textAlign={'center'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Your Email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['0', '1px solid white']}
          borderRight={['0', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            TechPulse hub
          </Heading>
          <Text>@shanistic</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100012336426519&mibextid=ZbWKwL"
            >
              Facebook
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              target="blank"
              href="https://www.linkedin.com/in/muhammad-usman-940b2a274"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a target="blank" href="https://github.com/shanistic">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
