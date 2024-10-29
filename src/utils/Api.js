import axios from 'axios';

const BASEURL = 'https://api.lyrics.ovh/v1';

export default {
	search: function (artist, title) {
		return axios.get(`${BASEURL}/${artist}/${title}`);
	}
};
