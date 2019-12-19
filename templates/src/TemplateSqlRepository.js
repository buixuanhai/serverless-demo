import { db } from '../../common/Db';
import { success, failure } from '../../common/response-lib'

class TemplateService {
  getTemplate = async (id) => {
    const [template] = await this.query(`select * from template where id = ?`, id)
    if (template) {
      return success(template)
    }

    return failure("Not found")
  }

  listTemplates = async (filters) => {

  }

  createTemplate = async (params) => {

  }

  updateTemplate = async (params) => {

  }
  deleteTemplate = async (params) => {

  }
}

export default TemplateService;