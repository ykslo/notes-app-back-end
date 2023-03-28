/* eslint-disable object-curly-newline */
/* eslint-disable no-mixed-spaces-and-tabs */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

/* eslint-disable no-tabs */
/* eslint-disable indent */
const routes = [
	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteByIdHandler,
	},
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteByIdHandler,
	},
	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteByIdHandler,
	},
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotesHandler,
	},
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler,
	},
];

module.exports = routes;
