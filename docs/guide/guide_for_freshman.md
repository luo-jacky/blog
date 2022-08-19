---
title: 新人指南
date: 2021-06-30 12:00:00
sidebar: 'auto'
categories:
  - guide
tags:
  - freshman
  - guide
author: Frank Cheung
publish: true
---

# 新人指南

## 添加文章步骤
1. 将 markdown 文件放在 docs/你想要放到的子目录 下
2. 如果没有合适的子目录，可以新建子目录，将 markdown 文件新建的子目录内即可。
> 如新建子目录为 `backend`，则文件目录为 `docs/backend`
3. 检查新增加的 markdown 文件是否已经添加了文件头，没有则需要添加，内容大致如下：
```markdown
---
title: 文章标题
date: 2022-08-04 12:00:00
sidebar: 'auto'
categories:
  - 分类
tags:
  - 标签
author: 作者名字
publish: true
---
```
4. commit 信息建议为：docs: 新增XXX文章
5. push 到 gitlab 仓库, 则会自动触发构建