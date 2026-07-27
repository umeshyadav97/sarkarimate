'use client';

import { toast } from 'react-toastify';
import { toastConfig } from '@/helpers/toast/toastConfig';

export const Toast = {
  success: (message: string) => toast.success(message, toastConfig),
  error: (message: string) => toast.error(message, toastConfig),
  warn: (message: string) => toast.warn(message, toastConfig),
  info: (message: string) => toast.info(message, toastConfig),
};
