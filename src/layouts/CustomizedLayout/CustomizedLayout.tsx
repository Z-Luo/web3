interface CustomizedLayoutProps {
	children: React.ReactNode;
}

const CustomizedLayout: React.FC<CustomizedLayoutProps> = ({ children }) => <main>{children}</main>;

export default CustomizedLayout;
