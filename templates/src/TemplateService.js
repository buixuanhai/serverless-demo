import { db } from '../../common/Db';
import TemplateSqlRepository from './TemplateSqlRepository'
class TemplateService {

  constructor(templateRepo = new TemplateSqlRepository()) {
    this.templateRepo = templateRepo
  }

  getTemplate = async (id) => {
    this.templateRepo.getTemplate(id);
  }

  listTemplates = async filters => {
    this.templateRepo.listTemplates(filters);

  }

  createTemplate = async (data) => {
    this.templateRepo.createTemplate(data);

  }

  updateTemplate = async (id, data) => {
    this.templateRepo.updateTemplate(id, data);

  }
}

export default TemplateService;