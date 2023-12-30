import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        p={'0'}
        h={'10'}
        w={'10'}
        borderRadius={'full'}
        colorScheme={'purple'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>TECHPULSE HUB</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  <Link onClick={onClose} to={'/'}>
                    Home
                  </Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  <Link to={'/videos?category=free'}>Watch For Free</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  <Link to={'/upload'}>Upload</Link>
                </Button>
              </VStack>

              <HStack
                w={'full'}
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme={'purple'}>
                  <Link to={'/login'}>Log In</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'outline'}
                >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
