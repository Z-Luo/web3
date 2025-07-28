import ComingSoon from '@/components/Pages/ComingSoon';
import CustomizedLayout from '@/layouts/CustomizedLayout';
import PageHead from '@/layouts/PageHead';

type ComponentType = React.FC & { layout: typeof CustomizedLayout };

const ComingSoonPage: ComponentType = () => {
	return (
		<>
			<PageHead title="Coming soon" />
			<ComingSoon />
		</>
	);
};

ComingSoonPage.layout = CustomizedLayout;

export default ComingSoonPage;
