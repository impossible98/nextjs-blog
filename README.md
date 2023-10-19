# Next juejin Blog

使用 Next 和掘金 api 搭建的个性博客

## 使用

Fork 本仓库后，新建`.env` 文件，写入 `uid=2189882895384093`, uid 值为掘金主页 url 上的 Id

修改 `src/config.js`

```js
export const config = {
  title: " 狂奔滴小马 | 前端工程师成长部落阁",
  description: "分享 JavaScript 以及热门框架，记录前端工程师学习成长历程。",
  author: "狂奔滴小马",
  avatar:
    "https://p3-passport.byteimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~200x200.awebp",
  banner: "Xiaoma Blog",
};
```

## 部署

使用 GitHub 账户登录 https://vercel.com/ 导入这个项目， 即可部署成功
