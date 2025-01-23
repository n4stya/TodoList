import styled from 'styled-components';
import { Box, TextField, Typography } from '@mui/material';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export const Container = styled(Box)`
    margin-bottom: 80px;
    width: 400px;
    height: 160px;
    padding: 25px 25px 30px 25px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 15px 20px -3px rgba(216, 188, 181, 0.82);
`;

export const InputContainer = styled(Box)`
    margin-top: 20px;
`;

export const LinkContainer = styled(Box)`
    padding-bottom: 5px;
    display: flex;
    align-items: center;
`;

export const StyledTextField = styled(TextField)`
    width: 310px;
    & .MuiInputBase-root {
        color: #342e31;
    }
    & .MuiOutlinedInput-root {
        border-radius: 15px;
        & fieldset {
            border: 2px solid rgba(238, 118, 88, 0.35);
        }
        &:hover fieldset {
            border-color: rgba(238, 118, 88, 0.64);
        }
        &.Mui-focused fieldset {
            border-color: #ee7658;
        }
    }
`;

export const StyledTypography = styled(Typography)`
    && {
        font-weight: bold;
    }
    color: #342e31;
`;

export const CircleIcon = styled(CircleRoundedIcon)`
    color: #ee7658;
    && {
        font-size: 62px;
    }
`;

export const AddIcon = styled(AddRoundedIcon)`
    color: #ffffff;
    position: absolute;
`;

export const IconButtonStyled = styled(IconButton)`
    transform: translate(14px, -10px);
`;

export const ArrowIcon = styled(KeyboardDoubleArrowRightRoundedIcon)`
    color: rgba(52, 46, 49, 0.5);
    transform: translate(-10px, 7px);
`;

export const StyledLink = styled(Link)`
    color: #342e31;
    text-decoration: none;
    transform: translate(5px, 0px);
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;
