import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react'

export interface CDrawerProps {
  children: React.ReactNode
  title: string
  isOpen: boolean,
  onClose: VoidFunction,
  onSubmit: VoidFunction
  submitText: string
  submitDisabled: boolean
  size?: string,
}

export const CDrawer = ({
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
  submitText,
  submitDisabled,
  size = 'md',
}: CDrawerProps) => {

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {children}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} size='sm' >
              Cancel
            </Button>
            <Button colorScheme='green' isDisabled={submitDisabled} onClick={onSubmit} size='sm'>{submitText}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}