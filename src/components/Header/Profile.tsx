import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean
}

export function Profile({showProfileData=true}:ProfileProps){
    return(
        <Flex align='center'>
           {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text >Gabriel Timba</Text>
                    <Text color='gray.300' fontSize='small'>
                        gabrieltimba@hotmail.com
                    </Text>
                </Box>
           )}
            <Avatar size='md' name='Gabriel Timba' src='https://github.com/GabrielTimba.png'/>
        </Flex>
);
}