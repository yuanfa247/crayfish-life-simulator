# 自我改进记录 - 2026-03-17_15-16

## 触发场景
本次改进触发：openclaw 定时任务 CLI 连接报 `unauthorized` 错误，经过排查最终解决问题，沉淀经验。

## 复盘结论

### 错误点
1. 修改配置文件后，使用 `openclaw gateway restart` 无法让 systemd 服务加载新配置
2. 一开始错误使用了用户个人 open_id 发飞书消息，导致 `open_id cross app` 错误
3. 编辑大 JSON 文件时，edit 工具没有正确匹配到完整文本段，导致修改不生效

### 根因
1. openclaw 运行在 systemd 用户服务下，必须通过 `systemctl --user restart openclaw-gateway` 才能真正重启加载新配置
2. 飞书机器人跨应用无法使用用户客户端 open_id，必须使用配置文件 `channels.feishu.allowFrom` 列表中允许的 open_id 才能发送成功
3. edit 工具修改配置需要完整匹配原始文本，修改 JSON 中嵌套对象要特别注意匹配完整

### 成功经验
1. 通过查看 gateway 实时日志，可以直接看到当前 gateway 实际使用的认证模式，快速定位问题
2. 使用 shell 脚本包装长命令避免引号转义错误，成功率更高
3. self-improvement 技能要求记录学习，本次正好完整实践了整个流程

## 行为规则

- **[严重错误]** 当修改 openclaw 配置后，必须执行 `systemctl --user restart openclaw-gateway` 重启服务，禁止只用 `openclaw gateway restart`
- **[严重错误]** 当用 openclaw CLI 发送飞书消息时，个人发送必须使用配置文件中 `channels.feishu.allowFrom` 列表中的 open_id，禁止使用用户客户端 open_id
- **[最佳实践]** 当排查 openclaw 认证问题时，先查看 gateway 日志确认当前实际运行的认证模式，禁止不看日志盲目重试
- **[最佳实践]** 当命令包含多行文本/复杂引号转义时，先写入脚本文件再执行，禁止在单行命令中处理复杂转义

## 验证方式
下次遇到 openclaw CLI 认证问题：
1. 查看日志确认当前认证模式
2. 确认配置修改正确后，执行 `systemctl --user restart openclaw-gateway`
3. 设置 `OPENCLAW_GATEWAY_TOKEN` 环境变量
4. 使用正确的 receive_id（个人用配置允许的 open_id，群用 chat_id oc_xxx）
5. 测试 CLI 命令，如果有复杂参数用脚本包装

完成以上步骤应该可以一次性解决认证+发送问题，避免多次重试。
