import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {style} from "./styles";

interface IProps {
  buttonName: string;
  children?: React.ReactNode;
  headerName: string;
}

export default function BorrowModal({buttonName, headerName, children}: IProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{buttonName}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h3 className="text-2xl font-bold text-black-800 text-center">
              {headerName}
            </h3>
              {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}