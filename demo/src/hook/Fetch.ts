import { useEffect, useState } from "preact/hooks";

function useFetch({ url }: { url: string }) {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [status, setStatus] = useState<number>();

	useEffect(() => {
		async function f() {
			try {
				const f = await fetch(url);

				if (!f.ok) {
					setStatus(f.status);
					return;
				}

				const json = await f.json();

				setData(json);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(true);
			}
		}

		f();
	}, []);

	return {
		error,
		data,
		loading,
		status,
	};
}

export default useFetch;
