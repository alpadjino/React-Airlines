type TReactDispatch<T> = {
	value: T;
	setValue: React.Dispatch<React.SetStateAction<T>>;
};

export { TReactDispatch };