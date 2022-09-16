import { Box, Button, Flex, HStack, Img, Stack, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { RiMenu2Fill } from "react-icons/ri";
import { Menu } from './Menu';
import logo from '../../assets/logo.svg';

export const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Box as="header" position="fixed" left={0} right={0} bg="zinc.800" zIndex={10}>
      <Flex h="128" px="8" maxW={1280} mx="auto" align="center" justify="space-between">
        <Img src={logo} />
        {
          isMobile ? (
            <>
              <Button onClick={onOpen} variant="unstyled" display="flex" alignItems="center">
                <RiMenu2Fill size={24}/>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent bg="zinc.800">
                  <DrawerHeader>
                    <Flex alignItems="center">
                      MENU
                      <DrawerCloseButton />
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                  <Menu isMobile={isMobile}/> 
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
              <Menu isMobile={isMobile}/> 
          )
        }
      </Flex>
    </Box>
  )
}