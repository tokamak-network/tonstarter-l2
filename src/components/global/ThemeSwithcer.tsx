import * as React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  useTheme,
  Flex,
} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import Sun from '@/assets/images/sun.svg'
import Moon from '@/assets/images/moon.svg'

type ThemeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const {toggleColorMode, colorMode} = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const theme = useTheme();

  return (
    // <IconButton
    //   size="md"
    //   fontSize="lg"
    //   variant="unstyled"
    //   color={
    //     colorMode === 'light'
    //       ?
    //          'black.200'
    //       : theme.colors.white[100]
    //   }
    //   marginLeft="2"
    //   onClick={toggleColorMode}
    //   bg={'transparent'}
    //   icon={<SwitchIcon w={35} h={35} />}
    //   _hover={{
    //     color:
    //       colorMode === 'light'
    //        ?'#007aff'
    //         : 'red',
    //   }}
    //   aria-label={`Switch to ${text} mode`}
    //   {...props}
    // />
    <Flex  onClick={toggleColorMode} height={'35px'} width={'35px'}>
        <Image src={colorMode === 'light'? Moon:Sun} alt='theme swithcer icon' height={30} width={30}/>
    </Flex>
  );
};
