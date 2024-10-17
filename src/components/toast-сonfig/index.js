import { toast } from 'react-toastify';

const toastConfig = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  icon: false,
  className: 'custom-toast-text',
  closeButton: ({ closeToast }) => (
    <button onClick={closeToast} style={{ backgroundColor: '#1858F3', borderRadius: '6px', color: 'white', padding:'8px 16px', marginLeft:'20px' }}>
        Ok
    </button>
  ),
};

export const showToast = (message, type = 'success') => {
  if (type === 'success') {
    toast.success(message, toastConfig);
  } else if (type === 'error') {
    toast.error(message, toastConfig);
  } else if (type === 'info') {
    toast.info(message, toastConfig);
  } else if (type === 'warn') {
    toast.warn(message, toastConfig);
  }
};