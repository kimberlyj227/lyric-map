import React from 'react';
import { Search, X } from 'react-bootstrap-icons';
import '../styles/Search.css';
// import SearchContext from "../utils/SearchContext";

function SearchForm({ handleReset }) {
	return (
		<form onSubmit={handleReset}>
			<div className='row justify-content-md-center'>
				<div className='col-md-1'>
					<button type='submit' className='btn border-0 text-white search'>
						<X /> Reset
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchForm;
