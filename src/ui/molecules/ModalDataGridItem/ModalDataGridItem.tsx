import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { MeterItemResponse } from '@/models';
import { InventoryGridItemView } from '../DataGrids';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 6,
    p: 8,

};

type Props = {
    item: MeterItemResponse,
    open: boolean,
    setOpen: (open: boolean) => void
    action: 'view' | 'edit' | 'delete',
    actionFunc: () => void
}

export const ModalDataGridItem = ({ item, action, open = false, setOpen, actionFunc }: Props) => {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <InventoryGridItemView item={item} />
                </Box>
            </Modal>
        </div>
    );
}