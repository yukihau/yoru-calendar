import Joi from 'joi';

export default class TaskSchema {

	public getByTitleBody = Joi.object({
		title: Joi.string().required(),
	});

	public taskBody = Joi.object({
		title: Joi.string().required(),
		description: Joi.string().allow('').optional(),
		datetime: Joi.string().required(),
		duration: Joi.string().allow('').optional(),
	});
}
