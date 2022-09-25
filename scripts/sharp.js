/*
 * 封面都转成为2000*1000尺寸的脚本
 * @Author: jianghong.wei 
 * @Date: 2022-09-25 21:23:42 
 * @Last Modified by: jianghong.wei
 * @Last Modified time: 2022-09-25 21:24:13
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

/**
 * 遍历图片
 * @param {string} dir 遍历文件夹路径
 * @param {function} callback 遍历回调，参数：文件名
 * @returns {string[]} 遍历到的图片文件名全路径
 */
function walkImg(dir, callback) {
  const files = fs.readdirSync(dir);

  const imgReg = /.{1,}\.(jpg|jpeg|webp|png)$/;

  for (const name of files) {
    if (imgReg.test(name)) {
      callback(path.resolve(dir, name));
    }
  }

  return files;
}
/**
 * 转换文件
 * @author 'weijianghong'
 * @date 2022-09-25
 * @param {string} file 图片文件全路径
 */
function covert(file) {
  const img = fs.readFileSync(file);

  const { dir, base } = path.parse(file);
  const output = path.resolve(dir, '../_cover/');

  if (!fsExistsSync(output)) {
    fs.mkdirSync(output)
  }

  sharp(img)
    .resize(2000, 1000)
    .jpeg({
      quality: 100,
      progressive: true,
    })
    .toFile(`${output}/${base}`, (err, info) => {
      console.log("finished", err, info);
    });
}
/**
 * 生成文件
 * @author 'weijianghong'
 * @date 2022-09-25
 * @param {string} path 配置文件路径
 * @param {string[]} cover 封面文件路径
 */
function generateConfig(path, cover) {
  try {
    if (fs.existsSync(path)) {
      let config = fs.readFileSync(path, { encoding: "utf-8" });

      config = JSON.parse(config);
      if (Array.isArray(cover)) {
        config.cover = cover;

        fs.writeFileSync(path, JSON.stringify(config, null, 2));

        console.info('config.json已经更新完成，务必commit')
      } else {
        throw new Error("注入封面错误，参数错误：", cover);
      }
    } else {
      throw new Error(
        "未找到config文件，请在项目根目录新建配置文件：conifg.json"
      );
    }
  } catch (error) {
    console.error(error);
  }
}

function fsExistsSync(path) {
  try{
      fs.accessSync(path,fs.F_OK);
  }catch(e){
      return false;
  }
  return true;
}

const DIR = path.resolve(__dirname, "../public/assets/imgs/cover");
const CONFIG_DIR = path.resolve(__dirname, "../config.json");

const files = walkImg(DIR, (file) => {
  covert(file);
});

generateConfig(CONFIG_DIR, files);
