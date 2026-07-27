'use client';

import { toast } from 'react-toastify';
import { toastConfig } from '@/helpers/toast/toastConfig';

const toastClassByType = {
  success: 'sarkarimate-toast sarkarimate-toast--success',
  error: 'sarkarimate-toast sarkarimate-toast--error',
  warn: 'sarkarimate-toast sarkarimate-toast--warn',
  info: 'sarkarimate-toast sarkarimate-toast--info',
};

export const Toast = {
  success: (message: string) =>
    toast.success(message, { ...toastConfig, className: toastClassByType.success }),
  error: (message: string) =>
    toast.error(message, { ...toastConfig, className: toastClassByType.error }),
  warn: (message: string) =>
    toast.warn(message, { ...toastConfig, className: toastClassByType.warn }),
  info: (message: string) =>
    toast.info(message, { ...toastConfig, className: toastClassByType.info }),
};
