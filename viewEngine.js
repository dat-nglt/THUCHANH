import path from 'path';

const viewEngine = (app) => {
  app.set('view engine', 'ejs')
  app.set(
    'views',
    path.join(__dirname, './')
  )
}

export default viewEngine
