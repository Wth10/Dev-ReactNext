import Script from 'next/script';
import Browser from '../components/browser';

export default function Index() {
	return (
		<>
			<header>
				<title>Next-App</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<h2> Hello World Index </h2>
				<div className="bg-[#00FF7F]  text-[#00008B]">
					<span className="p-12 m-10">
						<Browser name="Page Two" destiny="/home" />
					</span>
					<span className="p-12 m-10">
						<Browser name="API" destiny="/api/hello" />
					</span>
					<span className="p-12 m-10">
						<Browser name="Null" destiny="/api/user/user" />
					</span>
				</div>
			</main>
		</>
	);
}
