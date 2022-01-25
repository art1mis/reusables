import React from 'react';

const useSnackpack = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = React.useCallback(
    (message) => () => {
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    },
    [setSnackPack],
  );

  const handleClose = React.useCallback(
    (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    },
    [setOpen],
  );

  const handleExited = React.useCallback(() => {
    setMessageInfo(undefined);
  }, [setMessageInfo]);

  return {
    open,
    key: messageInfo ? messageInfo.key : undefined,
    handleClick,
    onClose: handleClose,
    TransitionProps: { onExited: handleExited },
    message: messageInfo ? messageInfo.message : undefined,
    autoHideDuration: 6000,
  };
};

export default useSnackpack;
