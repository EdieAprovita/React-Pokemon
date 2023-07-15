import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const PokemonComponent: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Routes></Routes>
		</Router>
	);
};

export default PokemonComponent;
