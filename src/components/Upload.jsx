import React from 'react';
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack>
            <Input
              required
              type="file"
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  color: 'purple',
                  backgroundColor: 'white',
                  height: '100%',
                  width: 'calc(100% + 36px)',
                  marginLeft: '-18px',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
