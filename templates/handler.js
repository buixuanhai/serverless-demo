import TemplateService from "./src/TemplateSqlRepository";

const templateService = new TemplateService()

export const getTemplate = async (event, context, callback) => {
  // get it from event
  // let id = event.....
  return templateService.getTemplate(id);
};

export const createTemplate = async (event, context, callback) => {
  // get data from event
  // const data = event.....
  return templateService.createTemplate(data);
};

export const updateTemplate = async (event, context, callback) => {
  // get id and body from event
  // let id = event.....
  // let data = event.....
  return templateService.updateTemplate(id, data);
};

export const deleteTemplate = async (event, context, callback) => {
  // get id from event
  // let id = event.....
  return templateService.deleteTemplate(id);
};