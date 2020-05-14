const path = require('path');
const fs = require('fs');

// Функция предполагает для каждого файла точки входа в src
// наличие одноимённого шаблона в src/templates

function findEntryPoints() {
  // Находим директории
  const workDir = process.cwd();
  const srcDir = path.resolve(workDir, 'src');
  const templatesDir = path.resolve(srcDir, 'templates');

  // Находим файлы точек входа и шаблонов
  const jsFiles = fs.readdirSync(srcDir).filter((filename) => {
    return filename.endsWith('.js');
  });
  
  const templates = fs.readdirSync(templatesDir).filter((filename) => {
    return filename.endsWith('.html');
  });

  // Находим все пары [точка входа] - [шаблон]
  return templates.reduce((accumulator, current) => {
    const point = current.split('.')[0];
    jsFiles.forEach((file) => {
      if (file.split('.')[0] === point) {
        accumulator.push(point);
      }
    });
    return accumulator;
  }, []);
}

module.exports = findEntryPoints;
