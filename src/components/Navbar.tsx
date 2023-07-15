// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
	<nav className="bg-blue-500 p-2 mt-0 w-full">
		{" "}
		{/* Aquí puedes personalizar tu navbar con Tailwind */}
		<div className="container mx-auto flex flex-wrap items-center">
			<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<Link
					to="/"
					className="text-white no-underline hover:text-white hover:no-underline">
					<span className="text-2xl pl-2">
						<i className="em em-grinning"></i> Mi App
					</span>
				</Link>
			</div>
			<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
					<li className="mr-3">
						<Link
							to="/berries"
							className="inline-block py-2 px-4 text-white no-underline">
							Berries
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/encounters"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Encounters
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/evolution"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Evolution
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/games"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Games
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/items"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Items
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/languages"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Languages
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/locations"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Locations
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/machines"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Machines
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/moves"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Moves
						</Link>
					</li>
					<li className="mr-3">
						<Link
							to="/pokemons"
							className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
							Pokemons
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
