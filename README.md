# Bimanual Folding Project Page

Static bilingual project page for the dual-Piper towel-folding experiment described in [dream25851/ACT](https://github.com/dream25851/ACT). The default page is English; the top-right language control opens the complete Chinese version.

## Website

Visit the project page: [https://dream25851.github.io/Bimanual_Folding/](https://dream25851.github.io/Bimanual_Folding/)

## Authors and affiliations / 作者与单位

- **Author / 作者:** Xiang Meng / 孟想 — East China University of Science and Technology / 华东理工大学.
- **Author / 作者:** Mingzhe Liu / 刘明哲 — East China University of Science and Technology / 华东理工大学.
- **Advisor / 指导教师:** Ning Guo / 郭宁 — School of Artificial Intelligence, Shanghai Jiao Tong University / 上海交通大学人工智能学院.

This is a summer research project. We thank the [Human-Inspired Robotics Learning Lab (HIROL)](https://hirol.sjtu.edu.cn/), School of Artificial Intelligence, Shanghai Jiao Tong University, and its team, led by Prof. Wenzhao Lian (连文昭), for their support.

本项目为暑期研究项目。感谢上海交通大学人工智能学院[类人智能实验室（HIROL）](https://hirol.sjtu.edu.cn/)及连文昭教授带领的团队的支持。

## Citation / 引用

See [CITATION.md](./CITATION.md) for project-page attribution and BibTeX.

## Website handover / 网站移交范围

The planned handover to the [m-robots organization on AtomGit](https://atomgit.com/m-robots) covers this static project website and its bundled presentation assets. The ACT experiment and Physical AI Runtime repositories remain on GitHub and are linked as external resources. The AtomGit repository and any new website address will be added after the import and hosting are confirmed.

拟移交至 AtomGit m-robots 组织的范围为本静态展示网站及随仓库提供的展示素材。ACT 和 Physical AI Runtime 继续使用下方 GitHub 仓库链接。导入和网页托管确认后，再补充 AtomGit 仓库地址及新的展示页地址。

The page presents:

- the `physical_ai_runtime` system architecture;
- the custom slim gripper fingers;
- corner-grasp pretraining and corrective HIL collection;
- the 150-trial evaluation and its limitations;
- representative policy and intervention videos.
- matched English and Chinese research summaries.

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Media

The page remains usable before project media is embedded and shows labeled fallback slots. Add the requested files under `static/images/` and `static/videos/`; no HTML changes are required. Exact filenames, the three-camera conversion handoff, and the architecture-diagram prompt are listed in [ASSETS.md](./ASSETS.md).

## Related repositories

- [Experiment record](https://github.com/dream25851/ACT)
- [Physical AI Runtime](https://github.com/dream25851/physical_ai_runtime)

## FAQ / 常见问题

Bring-up problems on a bimanual rig concentrate in three places: communication latency, camera calibration, and emergency-stop handling. [FAQ.md](./FAQ.md) lists the typical symptoms, the usual causes, and the order in which to check them, including data collection and page-preview issues.

双臂系统的调试问题集中在三处：通信延迟、相机标定、急停处理。[FAQ.md](./FAQ.md) 按「现象 → 原因 → 排查与处理」整理了这些问题，另含数据采集与页面预览部分。

Topics covered / 覆盖内容:

- communication and latency: leader–follower lag, jittery rollouts, frame misalignment, dropped commands / 通信与延迟：主从跟随滞后、动作卡顿、观测错位、指令丢失
- cameras and calibration: wrist camera extrinsic checks, USB bandwidth, cable strain / 相机与标定：腕部相机外参验收、USB 带宽、线缆牵扯
- emergency stop and takeover: recovery order, authority switching, joint limits and singularities / 急停与接管：恢复顺序、权限切换、关节限位与奇异位形
- data and training: dropped frames, lost corner-grasp skill after fine-tuning / 数据与训练：丢帧、微调后角点技能退化


## License / 许可证

This project is released under the [Apache License 2.0](./LICENSE), the same license used across the M-Robots community on AtomGit. You may use, modify and redistribute the page source, the text and the bundled media with attribution, subject to the terms of that license.

本项目采用 [Apache License 2.0](./LICENSE)，与 AtomGit 上 M-Robots 社区组织的主线一致。在保留版权与许可声明的前提下，可自由使用、修改和再分发本页面源码、文本及随仓库提供的展示素材，具体条款以许可证原文为准。

If you reuse the experiment footage or figures in a talk or a paper, please cite the project page (see [CITATION.md](./CITATION.md)) in addition to keeping the license notice. / 若在报告或论文中复用本项目的实验影像与图表，除保留许可声明外，请一并引用本展示页（见 [CITATION.md](./CITATION.md)）。

Copyright 2026 Xiang Meng and Mingzhe Liu. / 版权所有 2026 孟想、刘明哲。
