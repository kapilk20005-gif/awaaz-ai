import React from 'react';
import MainLayout from './MainLayout';

const DashboardLayout: React.FC<{children?: React.ReactNode}> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default DashboardLayout;
