import styled from 'styled-components';
import { Button, Typography, Box } from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { Link } from 'react-router-dom';

export const Container = styled(Box)`
    background-color: #fff;
    width: 410px;
    border-radius: 20px;
    padding: 25px 20px 20px 20px;
    margin-bottom: 80px;
    box-shadow: 0px 15px 20px -3px rgba(216, 188, 181, 0.82);
`;

export const ButtonContainer = styled(Box)`
    padding-top: 10px;
`;

export const FilterButton = styled(Button)`
    && {
        padding: 5px 35px;
        margin: 5px;
        border-radius: 25px;
        background-color: rgba(103, 174, 241, 0.31);
        color: #4791d6;

        &.active {
            background-color: #67aef1;
            color: #ffffff;
        }
    }
`;

export const ArrowIcon = styled(KeyboardDoubleArrowLeftRoundedIcon)`
    color: rgba(52, 46, 49, 0.5);
    transform: translate(-10px, 7px);
`;

export const StyledTypography = styled(Typography)`
    && {
        font-weight: bold;
    }
    color: #342e31;
`;

export const StyledLink = styled(Link)`
    color: #342e31;
    text-decoration: none;
    transform: translate(5px, -8px);
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;

export const LinkContainer = styled(Box)`
    margin-top: 10px;
    padding-left: 5px;
`;
