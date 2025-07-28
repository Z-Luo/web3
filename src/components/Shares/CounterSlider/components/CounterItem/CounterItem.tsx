import { useRef } from 'react';
import { useCountUp } from 'react-countup';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CounterItemProps {
	end: number;
	duration?: number;
	delay?: number;
	prefix?: string;
	suffix?: string;
	shouldReset: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ shouldReset, ...props }) => {
	const countUpRef = useRef(null);

	const { start } = useCountUp({
		ref: countUpRef,
		start: 0,
		separator: ',', // Add a comma as the separator
		useGrouping: true, // Enable grouping to format the number
		...props
	});

	if (shouldReset) {
		start();
	}

	return <div ref={countUpRef} />;
};

export default CounterItem;
