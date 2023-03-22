import React, { useState } from "react";
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const AppInput = ({
    label,
    onChange,
    value,
    password
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Box p={1} sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>

                <OutlinedInput
                    id="outlined-adornment-password"
                    type={(showPassword || !password) ? 'text' : 'password'}
                    endAdornment={
                        password ?
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment> : null
                    }

                    label={label}
                    value={value}
                    onChange={onChange}
                />
            </FormControl>
        </Box>
    )
}

export default AppInput;