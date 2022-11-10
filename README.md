# todo

* 主页√、文章详情√、归档√、标签√、关于页面。
* 文章搜索功能√
* 相册
* 评论、访问量
* 文章图片接入PhotoSwipe点击放大√
* 接入google analasys√
* markdown表格支持√
* 所有配置抽离为配置文件
* 图片路径转换
* 文章目录

![GitHub last commit](https://img.shields.io/github/last-commit/HelloWorld20/blog-nextjs)

![GitHub top language](https://img.shields.io/github/languages/top/HelloWorld20/blog-nextjs)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/HelloWorld20/blog-nextjs)

# 开发

```shell
  npm run dev
```

# 拉取文章

```shell
  npm run fetch
```

# 打包静态文件

```shell
  npm run generate
```

# 本地预览静态文件

```shell
  npm run preview
```

# 裁剪封面图

```shell
  minify:image
```

目前的笨办法是把所有封面图都裁剪成2:1的比例，然后next/image组件也写死2:1的比例，以此来获得next/image组件的自动优化

该方法会将`public/assets/imgs/cover`里的所有图片都裁剪成为2:1的比例，然后生成在`public/assets/imgs/_cover`下。next直接读取`_cover`文件夹下的图片。

所以如果有更新过`public/assets/imgs/cover`下的图片后，应该执行一次`npm run minify:image`来从新创建封面图片

# 添加搜索索引

```shell
  npm run indexed
```

pagefind插件基于已经打包生成的静态文件建立搜索索引。所以此命令必须是在执行完`next build && next export`之后执行。
