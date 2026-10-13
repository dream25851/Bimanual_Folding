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
