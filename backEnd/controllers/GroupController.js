import groupModel from '../models/groupModel'

const getGroupPage = async (req, res) => {
  try {
    let groupData = await groupModel.getAllGroup()
  return res.render('main', {
      data: {
        title: 'Group Page',
        page: 'group',
        sessionData: req.session.user,
        rows: groupData
      },
      messages: req.flash('error')
    })  
  } catch (error) {
    return res.render('error', {
      data: {
        title: 'Error',
        page: 'error'
      }
    })
  }
}

export default { getGroupPage }
