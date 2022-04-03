import {Text} from '@chakra-ui/react';

export function Logo(){
    return(
        <Text
            fontSize={['2xl','3xl']}
            fontWeight='bold'
            letterSpacing='tighter'
            w='64'
        >
            dashgo
            <Text as='span' color='pink.500' ml='1'>.</Text>
        </Text>
    )
} 