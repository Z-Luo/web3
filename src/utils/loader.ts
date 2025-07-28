interface IImageLoader {
	src: string | JSX.Element;
}

const imageLoader = ({ src }: IImageLoader) => {
	return `${src}`;
};

export default imageLoader;
