# Bimanual Folding Project Page

Static bilingual project page for the dual-Piper towel-folding experiment described in [dream25851/ACT](https://github.com/dream25851/ACT). The default page is English; the top-right language control opens the complete Chinese version.

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
