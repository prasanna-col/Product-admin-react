import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { COLORS } from '../../constant/color';
import Box from '@mui/material/Box';
const CustomButton = styled(Button)({
    backgroundColor: COLORS.appColor,
    color: 'white',
    '&:hover': {
        backgroundColor: COLORS.appColor2,
    },
});

const AppButton = ({
    label,
    onPress
}) => {
    return (
        <Box p={1} sx={{
            '& > :not(style)': { m: 1, width: '15ch' },
        }}>
            <CustomButton variant="contained"
                onClick={onPress}>
                {label}
            </CustomButton>
        </Box>
    );
}

export default AppButton;
