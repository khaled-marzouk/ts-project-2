interface Iprops {
	msg: string;
}

function ErrorMsg({ msg }: Iprops) {
	return msg ? (
		<span className="block text-red-700 font-semibold text0sm">{msg}</span>
	) : null;
}

export default ErrorMsg;
