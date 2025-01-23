import styled from 'styled-components';
import { Box, Checkbox, TextField } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export const Container = styled(Box)`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    background-color: #ffffff;
    box-shadow: 10px 12px 30px -3px rgb(216, 223, 230);
    border-radius: 7px;
`;

export const TaskContainer = styled(Box)`
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
`;

export const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
`;

export const StyledCheckbox = styled(Checkbox)`
    && {
        &.Mui-checked {
            color: rgba(37, 39, 51, 0.54);
        }
    }
`;

export const StyledTextField = styled(TextField)`
    & .MuiInputBase-root {
        color: #342e31;
    }
    & .MuiOutlinedInput-root {
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

export const EditIcon = styled(EditRoundedIcon)`
    color: #67aef1;
    margin-right: 12px;
`;

export const DeleteIcon = styled(DeleteRoundedIcon)`
    color: #fd7560;
`;

export const CancelIcon = styled(CancelRoundedIcon)`
    color: #fd7560;
    && {
        font-size: 30px;
    }
`;

export const CheckIcon = styled(CheckCircleOutlineRoundedIcon)`
    color: rgb(162, 214, 107);
    margin-right: 9px;
    && {
        font-size: 30px;
    }
`;
