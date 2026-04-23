import React, { useState, useEffect } from "react";
import endpoints from "./assets/constants/endpoints.js";
import { httpMethods } from "./assets/constants/fethParameters.js";
import customFetchJson from "./assets/utilities/fetchHttpRequest.js";
import customFetchFile from "./assets/utilities/fetchFileRequest.js";
import "./assets/styles/variables.css";
import "./assets/styles/animations.css";
import "./assets/styles/global.css";


function App() {
	const [result, setResult] = useState(null);

	async function testAll_GetAll() {
		for(let i=0; i<Object.keys(endpoints.crud).length; i++) {
			if(Object.keys(endpoints.crud)[i] == "medias") {
				continue;
			};
			
			const url = endpoints.crud[Object.keys(endpoints.crud)[i]]["findAll"];
			const result = await customFetchJson(url, null, httpMethods.read, null);

			console.log(`▼————————————————————————————————————————▼\n■■■►${Object.keys(endpoints.crud)[i].toUpperCase()}◄■■■`);
			console.log(result);
			console.log("▲————————————————————————————————————————▲");
		};
	};

	useEffect(() => {
		// testAll_GetAll();
	}, []);

	return (
		<div>
			—aaaaaaaaaaaaaaaaa—
		</div>
	);
};


export default App;
