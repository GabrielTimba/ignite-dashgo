import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex
          as='header'
          w='100%'
          maxW={1480}
          h='12'
          mx='auto'
          mt='4'
          align='center'
          px='6'
        >
            <Text
              fontSize='3xl'
              fontWeight='bold'
              letterSpacing='tighter'
              w='64'
            >
                dashgo
                <Text as='span' color='pink.500' ml='1'>.</Text>
            </Text>

            <Flex
                as='label'
                flex={1}
                py='4'
                px='8'
                ml='6'
                maxW={480}
                alignSelf='center'
                color='gray.200'
                position='relative'
                bgColor='gray.800'
                borderRadius='full'
            >
                <Input
                    color='gray.50'
                    variant='unstyled'
                    px='4'
                    mr='4'
                    placeholder='Buscar na Plataforma'
                    _hover={{color:'gray.400'}}
                />
                <Icon as={RiSearchLine}/>
            </Flex>
            <Flex
                align='center'
                ml='auto'
            >
                <HStack
                  spacing='8'
                  mx='8'
                  pr='4'
                  py='1'
                  color='gray.300'
                  borderRightWidth={1}
                  borderColor='gray.700'
                >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                    <Icon as={RiUserAddLine} fontSize='20'/>
                </HStack>

                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text >Gabiel Timba</Text>
                        <Text color='gray.300' fontSize='small'>
                            gabrieltimba@hotmail.com
                        </Text>
                    </Box>
                    <Avatar size='md' name='Gabriel Timba' src='https://github.com/GabrielTimba.png'/>
                </Flex>
            </Flex>
        </Flex>

    )
}