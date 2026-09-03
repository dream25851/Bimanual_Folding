# Website Media Checklist

The English and Chinese pages share the same media files. Put each file at the exact path below; the labeled placeholder disappears automatically when the asset is present.

## Asset status

All required page assets are now present, including the policy-to-HIL transition video and the runtime architecture figure.

No `scratch20k` video is requested. That model remains in the quantitative table as a control, but its low success rate does not justify a separate qualitative slot.

## Images

| Exact path | Content | Recommended format |
|---|---|---|
| `static/images/runtime_architecture.png` | Publication-style diagram of `physical_ai_runtime`, control authority and the data/training loop | 16:9, 1920 × 1080 px or larger |
| `static/images/slim_gripper.jpg` | Close-up of the longer, narrower custom fingers; include the stock fingers for scale if convenient | Landscape, at least 1400 px wide |
| `static/images/towel_set.jpg` | Blue, green, red and yellow square towels plus the white rectangular towel | Landscape, neutral lighting, at least 1600 px wide |

## Videos

| Exact path | Content | Recommended format |
|---|---|---|
| `static/videos/finetune10k.mp4` | One complete autonomous success, from approach to release | H.264 MP4, 1080p or 720p, 16:9, 15–35 s |
| `static/videos/base20k.mp4` | Representative base-policy failure at a difficult random position | H.264 MP4, complete trial where practical |
| `static/videos/pretraining_teleop.mp4` | Bilateral leader-arm teleoperation, establishing that pretraining data was fully human-collected | H.264 MP4, 16:9, 10–30 s |
| `static/videos/three_camera_inputs.mp4` | Synchronized Orbbec top, left-wrist and right-wrist views used during inference | H.264 MP4, 16:9, 10–30 s |
| `static/videos/policy_hil_takeover.mp4` | Autonomous rollout → authority switch → human recovery → task completion | H.264 MP4, 16:9, 15–35 s |

`finetune10k.mp4` is used both as the page teaser and in the qualitative comparison, so only one file is needed.

## Three-camera video conversion

The original WebM recording was converted to a 1920 × 1080 H.264 file with fast-start metadata for the web page:

```text
/home/alpha/Bimanual_Folding/static/videos/three_camera_inputs.mp4
```

## Architecture figure prompt

Use the prompt below in Image 2. Preserve the English labels exactly so the generated figure works on both language versions of the page.

> Create a clean 16:9 scientific system architecture diagram for a robotics research project, suitable as the main architecture figure on an academic project page. Use a warm off-white background, restrained brick-red, dark green and charcoal accents, thin precise lines, flat vector shapes, generous whitespace, and crisp publication-quality typography. No gradients, no 3D rendering, no decorative robot illustration, no logos, and no extra text. Show four input blocks on the left: “Orbbec Top RGB”, “Left Wrist RGB”, “Right Wrist RGB”, and “14-D Joint State”. In the center, show a large container titled “physical_ai_runtime (ROS 2 Jazzy)” containing three modules: “ACT Policy Inference”, “RMI Authority Manager”, and “Episode Recorder”. On the right, show “Dual Piper Follower Arms” leading to “Custom Slim Gripper Fingers”. Clearly distinguish two control paths into the RMI Authority Manager: an autonomous path from “ACT Policy Inference” and a human path from “Dual Piper Leader Arms” through “Teleop Takeover”. Add a lower data loop: “Episode MCAP + Intervention Metadata” → “LeRobot Dataset” → “ACT Training” → “Checkpoint”, with the checkpoint arrow returning to “ACT Policy Inference”. Make the policy and teleoperation authority paths immediately readable, keep all arrows unambiguous, and render every specified label accurately.

Export the final image as `static/images/runtime_architecture.png` at 1920 × 1080 or 2400 × 1350 px.

## Capture notes

- Keep complete action sequences when possible; do not cut immediately before a failure or recovery.
- Do not overlay success rates inside videos; the page supplies the quantitative context.
- Remove audio unless it is informative and intended to be public.
- Check frames for faces, screens, serial numbers and private lab information before publishing.
- Treat media as qualitative illustration, not as additional evaluation trials.
