export const SET_NAME = 'SET_NAME';
export const setName = userName => ({
	type: SET_NAME,
	userName
});

export const SET_ADJECTIVE = 'SET_ADJECTIVE';
export const setAdjective = adjective => ({
	type: SET_ADJECTIVE,
	adjective
});

export const SET_COLOR = 'SET_COLOR';
export const setColor = color => ({
	type: SET_COLOR,
	color
});