import Script from 'next/script';
import Browser from '../components/Browser';

export default function Home() {
	return (
		<>
			<header>
				<title>Welcome-Next-App</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<div className="bg-white dark:bg-slate-800 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold text-white">Projects</h2>
						<a href="" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
							<svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
								<path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 11-1Z" />
							</svg>
							New
						</a>
					</div>
					<form className="group relative">
						<svg width="20" height="20" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
							<path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
						</svg>
						<input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Filter projects..." />
					</form>
				</div>

				<div className="px-8 mx-[20px] basis-auto	flex-[0_0_100%]	max-w-[100%]">
					<div className="selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
						<p>
							So I started to walk into the water. I won't lie to you boys, I was terrified.
							But I pressed on, and as I made my way past the breakers a strange calm came
							over me. I don't know if it was divine intervention or the kinship of all living
							things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
						</p>
					</div>

					<div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6">
						<div className='w-10 h-10 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
							<span>
								<Browser name="One" destiny="/home" />
							</span>
						</div>
						<div className='w-10 h-10 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
							<span>
								<Browser name="Two" destiny="/" />
							</span>
						</div>
						<div className='w-10 h-10 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg'>
							<span>
								<Browser name="Three" destiny="/" />
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
